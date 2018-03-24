/*
 * Copyright (c)  2018 Wise Wild Web .
 *
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 * @author : Nathanael Braun
 * @contact : caipilabs@gmail.com
 */

import React from "react";
import shortid from "shortid";
import "rescope-spells";
import "react-rescope";
import Draggable from 'react-draggable'; // The default
import Rescope, {Store, reScope, scopeRef, scopeToProps, scopeToState, propsToScope, spells, Scope} from "rescope";
import {renderToString} from "react-dom/server"

import "./App.scss"

var indexTpl = require('./index.html.tpl');

let { asStateMap, asScope } = spells;
let ReactDom                = require('react-dom');


@scopeToState(["appState", "someData"])
class App extends React.Component {
    static AppScope  = {
        @asStateMap
        appState: {
            selectedItemId: null
        },
        someData: class extends Store {
            static state = {
                src  : "/api/hello",
                items: []
            };
            static actions = {
                newPostIt() {
                    let { items } = this.nextState,
                        newPostIt = {
                            _id  : shortid.generate(),
                            style: {
                                background: "red",
                            },
                            text : "New Post It"
                        }
                    return {
                        items: [...items, newPostIt]
                    }
                },
                updatePostIt( postIt ) {
                    let { items } = this.nextState;
                    items         = items.map(it => (it._id === postIt._id) ? postIt : it);
                    
                    return {
                        items
                    }
                },
                saveState() {
                    console.log(this.scopeObj.serialize())
                }
            }
        }
    };
    static renderTo  = ( node ) => {
        let cScope = new Scope(App.AppScope);
        cScope.mount(
            ["appState", "someData"]
        ).then(
            ( err, state, context ) => {
                ReactDom.render(<App __scope={ cScope }/>, node);
            }
        )
    }
    static renderSSR = ( cfg, cb ) => {
        let cScope = new Scope(App.AppScope);
        cScope.mount(
            ["appState", "someData"]
        ).then(
            ( err, state, context ) => {
                let html;
                try {
                    html = indexTpl.render(
                        {
                            app  : renderToString(<App __scope={ cScope }/>),
                            state: JSON.stringify(cScope.serialize())
                        }
                    );
                    console.log(html)
                } catch ( e ) {
                    return cb(e)
                }
                cb(null, html)
            }
        )
    }
    
    render() {
        let {
                someData, appState
            } = this.state;
        return [
            <h1>Really basic drafty rescope SSR example</h1>,
            someData.items.map(
                note => <PostIt record={ note } selected={ note._id == appState.selectedItemId }/>
            ),
            <div
                className={ "newBtn button" }
                onClick={ this.$actions.newPostIt }>
                Add Post It
            </div>,
            <div
                className={ "saveBtn button" }
                onClick={ this.$actions.saveState }>
                Save state
            </div>
        ];
    }
}

@propsToScope(["record"], { key: 'postIt' })
@scopeToProps(
    {
        @scopeRef
        pos : "record.pos",
        @scopeRef
        text: "record.text"
    })
class PostIt extends React.Component {
    handleStop = ( e, pos ) => {
        debugger;
        
        let {
                style, text, $actions, record
            } = this.props;
        $actions.updatePostIt(
            {
                ...record,
                pos: { x: pos.x, y: pos.y }
            }
        )
    }
    
    render() {
        let {
                pos, text, style
            } = this.props;
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={ pos || { x: 0, y: 0 } }
                //position={ null }
                grid={ [25, 25] }
                onStart={ this.handleStart }
                onDrag={ this.handleDrag }
                onStop={ this.handleStop }>
                <div className={ "postit handle" }> {
                    text
                }!!!
                </div>
            </Draggable>
        );
    }
}

if ( typeof window != 'undefined' ) {
    window.App = App;
}
export default App