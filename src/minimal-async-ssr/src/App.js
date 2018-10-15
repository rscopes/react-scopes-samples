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

import React            from "react";
import shortid          from "shortid";
import AppScope         from './AppScope';
import {
	Store, reScope, scopeRef, scopeToProps, scopeToState, propsToScope, Scope
}                       from "rscopes";
import {renderToString} from "react-dom/server"

var cookie = require('cookie');

import "./App.scss"

let ReactDom = require('react-dom');


class App {
	static renderTo  = ( node, state ) => {
		let cScope    = new Scope(AppScope, { id: "App" }),
		    sid       = (cookie.parse(document.cookie) || {})["connect.sid"];
		sid           = sid && sid.replace(/^s\:([^\.]+)(?:$|\..*$)/ig, "$1")
		window.scopes = Scope.scopes;
		window.test   = () => {
			App.renderSSR({
				              state    : cScope.serialize(),
				              sessionId: sid
			              }, ( e, r ) => console.log(r))
		}
		state && cScope.restore(state)
		cScope.mount(["Home"])
		      .then(
			      ( { Home } ) => {
				      ReactDom.hydrate(<Home sessionId={ sid }/>, node);
			      }
		      )
	}
	static renderSSR = ( cfg, cb ) => {
		let rid    = shortid.generate(),
		    cScope = new Scope(AppScope, { id: rid });
		cfg.state && cScope.restore(cfg.state, { alias: "App" })
		//let env    = new Scope({}, {}),
		//    cScope = new Scope(AppScope, {
		//        key     : "App",
		//        parent  : env,
		//        snapshot: { [ env._id ]: cfg.state }
		//    }),
		//    state  = { [ env._id ]: cfg.state }
		//;
		//cfg.state && cScope.restore(state);
		//console.log(cfg.sessionId, state)
		cScope.mount(["SSRIndex"])
		      .then(
			      ( State ) => {
				      ///mount deps
				      renderToString(
					      <State.SSRIndex appScope={ cScope }/>);
				      cScope.then(State => {
					      //State.SSRIndex.
					      let html = renderToString(
						      <State.SSRIndex appScope={ cScope }/>);
					      cb(null, html);
					      //console.log(cfg.sessionId, JSON.stringify(cScope.serialize({
					      //                                                               norefs: true,
					      //                                                               alias : "App"
					      //                                                           }), null, 2), html)
					      cScope.destroy()
				      })
			      }
		      )
	}
}

if ( typeof window != 'undefined' ) {
	window.App = App;
}
export default App