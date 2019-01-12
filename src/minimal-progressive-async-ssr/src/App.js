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

import React            from 'react';
import Rnd              from 'react-rnd';
import shortid          from 'shortid';
import AppScope         from './AppScope';
import MeteoWidget      from './components/MeteoWidget.scoped';
import {
	Store, reScope, scopeRef, scopeToProps, propsToStore, scopeToState, propsToScope, Scope, spells
}                       from "rscopes";
import {renderToString} from "react-dom/server"


let { asStateMap } = spells;

import "weather-icons/css/weather-icons.css"
import "./App.scss"

var indexTpl = require('./index.html.tpl');
let ReactDom = require('react-dom');

@scopeToState(["appState", "someData"])
class App extends React.Component {
	static renderTo  = ( node ) => {
		let cScope      = new Scope(AppScope, { id: "App" });
		window.contexts = Scope.scopes;
		window.__scopesState && cScope.restore(window.__scopesState)
		cScope.mount(["appState", "someData"])
		      .then(
			      ( state ) => {
				      ReactDom.render(<App __scope={ cScope }/>, node);
			      }
		      )
	}
	static renderSSR = ( cfg, cb ) => {
		let rid    = shortid.generate(),
		    cScope = new Scope(AppScope, { id: rid });
		cfg.state && cScope.restore(cfg.state, { alias: "App" })
		//console.log(cfg)
		cScope.mount(["appState", "someData"])
		      .then(
			      ( state ) => {
				      let html, appHtml = renderToString(<App __scope={ cScope }/>), nstate,
				          complete      = state => {
					          try {
						          html = indexTpl.render(
							          {
								          app  : appHtml,
								          state: JSON.stringify(nstate = cScope.serialize({ alias: "App" }))
							          }
						          );
					          } catch ( e ) {
						          return cb(e)
					          }
					          cb(null, html, nstate)
				          };
				      cScope.then(complete)
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
				note => <MeteoWidget key={ note._id } record={ note }
				                     onSelect={ e => this.$actions.selectPostIt(note._id) }
				                     selected={ note._id == appState.selectedPostItId }/>
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


if ( typeof window != 'undefined' ) {
	window.App = App;
}
export default App