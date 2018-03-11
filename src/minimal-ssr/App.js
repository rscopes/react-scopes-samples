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

import Rescope, {Scope, reScope, scopeToProps, decorators} from "rescope";
//import {stateMap} from "rescope-spells";

let { asStateMap } = decorators;
let ReactDom                          = require('react-dom');

let MyScope = Scope.bind({
                             @asStateMap
                             appState: {
                                 selectedItemId: null
                             },
                             @asStateMap
                             someData: {
                                 src: "/api/hello"
                             }
                         });

@scopeToProps(["appState", "someData"])
class App extends React.Component {
    
    static renderTo  = ( node ) => {
        let cScope = new MyScope();
        cScope.mount(
            ["appState", "someData"]
        ).then(
            ( err, state, context ) => {
                ReactDom.render(<App/>, node);
            }
        )
    }
    static renderSSR = ( req ) => {
        MyScope.mount(
            ["appState", "someData"]
        ).then(
            ( err, state, context ) => {
                ReactDom.render(<App/>, node);
            }
        )
    }
    
    render() {
        let {
                someData, appState
            } = this.props;
        return (
            <div>
                <h1>Really basic drafty rescope SSR example</h1>
                {
                    someData.items.map(
                        note => <PostIt record={ note } selected={ note._id == appState.selectedItemId }/>
                    )
                }
            
            </div>
        );
    }
}

@reScope(
    {
        @asStateMap
        props: {},
        
        @asStateMap
        record: "props.record"
    }
)
@scopeToProps(
    {
        style: "record.style",
        text : "record.text"
    })
class PostIt extends React.Component {
    
    render() {
        let {
                style, text
            } = this.props;
        return (
            <div style={ style }>
                {
                    text
                }
            </div>
        );
    }
}

export default App