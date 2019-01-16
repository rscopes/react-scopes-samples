import React, {Component} from "react";

import superagent from "superagent";
import shortid    from "shortid";
import Rnd        from 'react-rnd';
import rscopes    from "rscopes";

const {
	      asStore, asScope, asRenderer, asRootRenderer, asRef
      } = rscopes.spells;

import {renderToString} from "react-dom/server"
import moment           from "moment";

export default {
	@asScope
	AppState: {
		@asStore
		appState: {
			selectedPostItId: null,
			selectPostIt( selectedPostItId ) {
				//debugger
				return { selectedPostItId };
			}
		},
		@asStore
		someData: {
			// initial state
			src  : "/api/hello",
			items: [{
				"_id"     : "rkUQHZrqM",
				"location": "paris",
				"size"    : { "width": 350, "height": 200 },
				"position": { "x": 321, "y": 167 }
			}, {
				"_id"     : "r1bcuMrcM",
				"location": "rio",
				"size"    : { "width": 350, "height": 200 },
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
				superagent.post('/', this.$stores.$parent.serialize())
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
	
	@asRenderer()
	MeteoInfos: ( {
		              props: { meteoData }
	              }, { $actions, $stores, $store } ) =>
		<div className={ "MeteoInfos" }>
			<div className={ "location" }>
				{ meteoData.name }&nbsp;
				(&nbsp;
				{
					meteoData.weather[0] &&
					meteoData.weather[0].description
				}
				&nbsp;)
			</div>
			<div className={ "picto" }>
				{
					meteoData.weather[0] &&
					<img
						src={ "http://openweathermap.org/img/w/" + meteoData.weather[0].icon + '.png' }></img>
				}
			</div>
			<div className={ "infos" }>
				<div className={ "dt" }>
				</div>
				<div className={ "dt" }>{ moment(meteoData.dt * 1000).format('MMMM Do YYYY, h:mm:ss a') }</div>
				<div className={ "wind" }>{ meteoData.wind.speed }mh</div>
			</div>
		</div>,
	
	@asRenderer(
		{
			@asStore
			MeteoSearch: {
				// bind record from the store
				@asRef
				record: "props.record",
				
				// initial state value
				src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
				
				// the function that apply changes in MeteoSearch state, if needed
				$apply( data = {}, state, { location, results, record } ) {
					//location = location || state.record.location;
					
					if ( location == data.location && data.results )
						return data;
					
					// do query meteo if needed
					if ( location ) {
						
						this.wait();// so the whole scope tree will wait for SSR
						
						superagent
							.get(state.src + location)
							.then(( res ) => {
								
								if ( location !== this.data.location )
									return;
								
								// update the store data
								this.push({ results: res.body, location });
								
								// update the record location
								this.$actions.updatePostIt(
									{
										...state.record,
										location
									});
							})
							// release anyway
							.then(e => this.release())
							.catch(e => this.release())
						
						return { location, fetching: true };
					}
					
					return data;
				},
				
				// $actions.updateSearch
				updateSearch( location ) {
					if ( location.length < 4 )
						return { location };
					
					return { location };
				}
			}
		}, ["MeteoSearch", "MeteoInfos"]
	)
	PostIt: ( {
		          props: {
			          MeteoSearch,
			          record, onSelect, selected
		          },
		          position, text, size, editing, searching, MeteoInfos,
		          doSave = () => $actions.AppState.updatePostIt(
			          {
				          ...record,
				          size    : size || record.size,
				          position: position
			          })
	          }
		,
		      {
		          $actions, $stores, $store
	          }
	) => {
		return (
			<Rnd
				absolutePos
				z={ selected ? 2000 : 1 }
				size={ size || record.size }
				position={ position || record.position }
				onDragStop={ this.saveState }
				onResizeStop={ this.saveState }
				onDrag={ ( e, d ) => {
					!selected && onSelect(record)
					this.setState(
						{
							position: { x: d.x, y: d.y }
						});
				} }
				onResize={ ( e, direction, ref, delta, position ) => {
					this.setState(
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
						!editing &&
						<div className={ "text" }>
							{ MeteoSearch.results && <MeteoInfos meteoData={ MeteoSearch.results }/> || "Edit me !" }
							<button onClick={ e => this.setState({ editing: true }) }
							        className={ "edit" }>🖋
							</button>
							<button onClick={ e => $actions.rmPostIt(record) }
							        className={ "delete" }>🖾
							</button>
						</div>
						||
						<div className={ "editor" }>
							{
								<div className={ "search" }>
									<input type="text"
									       onChange={ e => {
										       this.setState({ searching: e.target.value });
										       $actions.updateSearch(e.target.value);
									       } }
									       value={ searching !== undefined ? searching : record.location }
									       onMouseDown={ e => e.stopPropagation() }/>
								</div>
							}
							{
								MeteoSearch.fetching && "Loading...." ||
								<MeteoInfos meteoData={ MeteoSearch.results }/>
							}
							<button
								disabled={ MeteoSearch.fetching }
								onClick={ e => this.setState({ editing: false }) }>💾
							</button>
						</div>
					}
				</div>
			</Rnd>
		)
	}
	,
}