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

import React              from "react";
import AppScope           from './AppScope';
import {
    Store, reScope, scopeRef, scopeToProps, scopeToState, propsToScope, Scope
}                         from "react-rescope";
import { renderToString } from "react-dom/server"

var cookie = require('cookie');

import "./App.scss"

var indexTpl = require('./index.html.tpl');
let ReactDom = require('react-dom');


class App {
    static renderTo  = ( node, state ) => {
        let cScope    = new Scope(AppScope, { id: "App" }),
            sid       = ( cookie.parse(document.cookie) || {} )[ "connect.sid" ];
        sid           = sid && sid.replace(/^s\:([^\.]+)(?:$|\..*$)/ig, "$1")
        window.scopes = Scope.scopes;
        console.log(sid)
        window.test = () => {
            App.renderSSR({
                              state    : cScope.stores.AppState.serialize(),
                              sessionId: sid
                          }, ( e, r ) => console.log(r))
        }
        state && cScope.restore(state)
        cScope.mount([ "Home" ])
              .then(
                  ( { Home } ) => {
                      ReactDom.hydrate(<Home sessionId={ sid }/>, node);
                  }
              )
    }
    static renderSSR = ( cfg, cb ) => {
        let cScope = new Scope(AppScope, { id: cfg.sessionId + '/App' });
        
        cfg.state && cScope.restore({ [ cfg.sessionId ]: cfg.state })
        console.log(cfg.sessionId, { [ cfg.sessionId ]: cfg.state })
        cScope.mount([ "SSRIndex" ])
              .then(
                  ( { SSRIndex } ) => {
                      cb(null, renderToString(<SSRIndex sessionId={ cfg.sessionId }/>));
                      console.log(cfg.sessionId, cScope.stores.AppState.serialize())
                      //cScope.destroy()
                  }
              )
    }
}

if ( typeof window != 'undefined' ) {
    window.App = App;
}
export default App