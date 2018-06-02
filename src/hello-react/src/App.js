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

import Rescope, { scopeToState, reScopeProps } from "react-rescope";

let ReactDom      = require('react-dom'),
    Scope         = Rescope.Scope,
    NewsListComp  = require('./NewsListComp'),
    StoresContext = require('./StoresContext');

// create empty global context for fun
let GlobalStaticContext = new Scope({}, { id: "static", defaultMaxListeners: 500 });


// create "appContext" with the stores
new Scope(StoresContext, {
    id                 : "appContext",
    parent             : GlobalStaticContext,
    defaultMaxListeners: 500
});

@scopeToState(
    Scope.scopes.appContext,
    [ "status", "appState" ]
)
class App extends React.Component {
    
    static renderTo = ( node ) => {
        Scope.scopes.appContext.mount(
            [ "userEvents" ]
        ).then(
            ( state ) => {
                ReactDom.render(<App/>, node);
            }
        )
    }
    
    
    render() {
        let {
                status
            } = this.state;
        return (
            <div>
                <h1>Really basic drafty rescope + react mini app example</h1>
                
                <div style={ { border: "solid 1px lightgrey", borderRadius: "3px" } }>
                    <b><u>
                        <button
                            onClick={ () => this.$dispatch('switchUser', 'MissTick') }>
                            MissTick events
                        </button>
                    </u></b>&nbsp;&nbsp;
                    <b><u>
                        <button
                            onClick={ () => this.$dispatch('switchUser', 'MrNice') }>
                            MrNice events
                        </button>
                    </u></b>
                </div>
                <pre>
                      { status && JSON.stringify(status, null, 2) }
                </pre>
                <NewsListComp/>
            
            </div>
        );
    }
}
;
window.App = App;