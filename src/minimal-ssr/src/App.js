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
import Rnd from 'react-rnd';
import superagent from 'superagent';


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
        @asStateMap
        someData: {
            src  : "/api/hello",
            items: [],
            newPostIt() {
                return {
                    items: [...this.nextState.items, {
                        _id : shortid.generate(),
                        size: {
                            width : 200,
                            height: 200
                        },
                        text: "New Post It #" + this.nextState.items.length
                    }]
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
                superagent.post('/', this.scopeObj.serialize())
                          .then(( e, r ) => {
                              console.log(e, r)
                          })
            }
        }
    };
    static renderTo  = ( node ) => {
        let cScope = new Scope(App.AppScope, { id: "App" });
        window.__scopesState && cScope.restore(window.__scopesState)
        window.context = Scope.scopes;
        cScope.then(
            ( err, state, context ) => {
                ReactDom.render(<App __scope={ cScope }/>, node);
            }
        )
    }
    static renderSSR = ( cfg, cb ) => {
        let cScope = new Scope(App.AppScope, { id: "App" });
        cfg.state && cScope.restore(cfg.state)
        cScope.then(
            ( err, state, context ) => {
                let html;
                try {
                    html = indexTpl.render(
                        {
                            app  : renderToString(<App __scope={ cScope }/>),
                            state: JSON.stringify(cfg.state || cScope.serialize({ alias: "App" }))
                        }
                    );
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
                note => <PostIt key={ note._id } record={ note } selected={ note._id == appState.selectedItemId }/>
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
        @scopeRef// for fun
        size    : "record.size",
        @scopeRef
        position: "record.position",
        @scopeRef
        text    : "record.text"
    })
class PostIt extends React.Component {
    state = {}
    
    render() {
        let {
                position, text, size, $actions, record
            } = this.props;
        return (
            <Rnd
                absolutePos
                size={ size }
                position={ position }
                onDragStop={ ( e, d ) => {
                    $actions.updatePostIt(
                        {
                            ...record,
                            position: { x: d.x, y: d.y }
                        });
                } }
                onResize={ ( e, direction, ref, delta, position ) => {
                    $actions.updatePostIt(
                        {
                            ...record,
                            position,
                            size: {
                                width : ref.offsetWidth,
                                height: ref.offsetHeight
                            }
                        });
                } }>
                <div className={ "postit handle" }>
                    {
                        !this.state.editing &&
                        <div className={ "text" }>
                            { text }
                            <button onClick={ e => this.setState({ editing: true }) }>🖋</button>
                        </div>
                        ||
                        <div className={ "editor" }>
                            <textarea
                                onChange={ e => {
                                    $actions.updatePostIt(
                                        {
                                            ...record,
                                            text: e.target.value
                                        });
                                } }
                                onMouseDown={ e => e.stopPropagation() }
                            >{ text }</textarea>
                            <button onClick={ e => this.setState({ editing: false }) }>💾</button>
                        </div>
                    }
                </div>
            </Rnd>
        );
    }
}

if ( typeof window != 'undefined' ) {
    window.App = App;
}
export default App