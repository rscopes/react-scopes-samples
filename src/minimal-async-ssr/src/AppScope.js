import React, {Component} from "react";

import superagent from "superagent";
import shortid    from "shortid";
import Rnd        from 'react-rnd';
import rscopes    from "rscopes";

const {
	      asStateMap, asScope, asRenderer, asRootRenderer
      } = rscopes.spells;

import {renderToString} from "react-dom/server"

export default {
	@asScope
	AppState: {
		@asStateMap
		appState: {
			selectedPostItId: null,
			selectPostIt( selectedPostItId ) {
				//debugger
				return { selectedPostItId };
			}
		},
		@asStateMap
		someData: {
			// initial state
			src  : "/api/hello",
			items: [{
				"_id"     : "rkUQHZrqM",
				"size"    : { "width": 300, "height": 400 },
				"text"    : "New Post It #0 somewhere we wait some new shit out there !",
				"position": { "x": 321, "y": 167 }
			}, {
				"_id"     : "r1bcuMrcM",
				"size"    : { "width": 300, "height": 400 },
				"text"    : "do somethink",
				"position": { "x": 260, "y": 576 }
			}],
			// actions
			newPostIt() {
				return {
					items: [...this.nextState.items, {
						_id     : shortid.generate(),
						size    : {
							width : 200,
							height: 200
						},
						position: {
							x: 100 + ~~(Math.random() * 600),
							y: 100 + ~~(Math.random() * 600)
						},
						text    : "New Post It #" + this.nextState.items.length
					}]
				}
			},
			updatePostIt( postIt ) {
				return {
					items: this.nextState.items
					           .map(
						           it => (it._id === postIt._id)
						                 ? postIt
						                 : it
					           )
				}
			},
			rmPostIt( postIt ) {
				return {
					items: this.nextState.items
					           .filter(
						           it => (it._id !== postIt._id)
					           )
				}
			},
			saveState() {
				superagent.post('/', this.$stores.$parent.serialize({norefs:true}))
				          .then(( e, r ) => {
					          console.log(e, r)
				          })
			}
		}
	},
	
	@asRenderer(["!Home"])
	SSRIndex: ( { Home, props: { sessionId } }, { $scope } ) =>
		<html lang="en">
		<head>
			<meta charSet="UTF-8"/>
			<title>Really basic drafty rescope + react SSR example</title>
		</head>
		<body>
		<div id="app"><Home/></div>
		<script src="./App.js"></script>
		<script
			dangerouslySetInnerHTML={ { __html: "App.renderTo(document.getElementById('app'), " + JSON.stringify($scope.parent.parent.serialize()[sessionId]) + ", document.cookie);" } }/>
		</body>
		</html>,
	
	@asRenderer(["!AppState.appState", "!AppState.someData", "!PostIt"])
	Home: ( {
		        someData, appState, PostIt
	        }, { $actions, $stores, $store } ) =>
		<div>
			<h1>Really basic drafty rescope SSR example</h1>
			<div
				className={ "newBtn button" }
				onClick={ $actions.AppState.newPostIt }>
				Add Post It
			</div>
			<div
				className={ "saveBtn button" }
				onClick={ $actions.AppState.saveState }>
				Save state
			</div>
			{
				someData.items.map(
					note => <PostIt key={ note._id } record={ note }
					                onSelect={ e => $actions.AppState.selectPostIt(note._id) }
					                selected={ note._id == appState.selectedPostItId }/>
				)
			}
		</div>,
	
	@asRenderer(
		{
			@asStateMap
			DaSearch: {
				src: "https://query.yahooapis.com/v1/public/yql?format=json&env=sto&q=",
				
				updateSearch( searching ) {
					let state = this.nextState;
					
					if ( searching == state.searching ) return;
					if ( searching.length < 4 )
						return { searching };
					
					superagent.get(state.src +
						               'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + searching + '")')
					          .then(( res ) => {
						          if ( searching != this.nextState.searching ) return;
						          try {
							          this.data.results = {
								          place: res.body.query.results.channel.location,
								          img  : res.body.query.results.channel.image.url,
								          descr: res.body.query.results.channel.item.description.replace('<![CDATA[', '').replace(']]>', '')
							          };
						          } catch ( e ) {
							          this.data.results = {
								          place: { city: "no results" }
							          };
						          }
						          this.push(this.data)
						          this.release();
					          })
					this.wait();
					return { searching };
				}
			}
			
			
		}, ["DaSearch"]
	)
	PostIt: ( {
		          props: { record, onSelect, selected },
		          position, text, size, editing,
		
		          DaSearch,
		
		          doSave = () => $actions.AppState.updatePostIt(
			          {
				          ...record,
				          size    : size || record.size,
				          position: position
			          })
	          }, { $actions, $stores, $store } ) => {
		return (
			<Rnd
				absolutePos={ true }
				z={ selected ? 2000 : 1 }
				size={ size || record.size }
				position={ position || record.position }
				onDragStop={ doSave }
				onResizeStop={ doSave }
				onDrag={ ( e, d ) => {
					!selected && onSelect(record)
					$store.setState(
						{
							position: { x: d.x, y: d.y }
						});
				} }
				onResize={ ( e, direction, ref, delta, position ) => {
					$store.setState(
						{
							position,
							size: {
								width : ref.offsetWidth,
								height: ref.offsetHeight
							}
						});
				} }>
				<div className={ "postit handle" }>
					{
						<div className={ "search" }>
							<input
								onChange={ e => {
									$actions.updateSearch(e.target.value);
								} }
								//defaultValue={ DaSearch.searching }
								onMouseDown={ e => e.stopPropagation() }/>
						</div>
					}
					{
						DaSearch
						&& DaSearch.results
						&& DaSearch.results.place
						&& <div>
							{ DaSearch.results.place.city } - { DaSearch.results.place.country }
						</div>
					}
					<div className={ "text" }
					     dangerouslySetInnerHTML={ {
						     __html: DaSearch
							     && DaSearch.results
							     && DaSearch.results.descr
					     } }/>
				</div>
			</Rnd>
		)
	},
}