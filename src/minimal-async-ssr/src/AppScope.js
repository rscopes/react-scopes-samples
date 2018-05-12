import React, { Component } from "react";

import superagent         from "superagent";
import shortid            from "shortid";
import Rnd                from 'react-rnd';
import {
    asStateMap, asScope, asRenderer, asRootRenderer
}                         from "rescope-spells";
import { renderToString } from "react-dom/server"

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
            items: [ {
                "_id"     : "rkUQHZrqM",
                "size"    : { "width": 200, "height": 200 },
                "text"    : "New Post It #0 somewhere we wait some new shit out there !",
                "position": { "x": 321, "y": 167 }
            }, {
                "_id"     : "r1bcuMrcM",
                "size"    : { "width": 200, "height": 200 },
                "text"    : "do somethink",
                "position": { "x": 260, "y": 576 }
            } ],
            // actions
            newPostIt() {
                return {
                    items: [ ...this.nextState.items, {
                        _id     : shortid.generate(),
                        size    : {
                            width : 200,
                            height: 200
                        },
                        position: {
                            x: 100 + ~~( Math.random() * 600 ),
                            y: 100 + ~~( Math.random() * 600 )
                        },
                        text    : "New Post It #" + this.nextState.items.length
                    } ]
                }
            },
            updatePostIt( postIt ) {
                return {
                    items: this.nextState.items
                               .map(
                                   it => ( it._id === postIt._id )
                                         ? postIt
                                         : it
                               )
                }
            },
            rmPostIt( postIt ) {
                return {
                    items: this.nextState.items
                               .filter(
                                   it => ( it._id !== postIt._id )
                               )
                }
            },
            saveState() {
                superagent.post('/', this.scopeObj.serialize())
                          .then(( e, r ) => {
                              console.log(e, r)
                          })
            }
        }
    },
    @asRenderer([ "!Home" ])
    SSRIndex: ( { Home, props: { state } }, { $stores } ) =>
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <title>Really basic drafty rescope + react component example</title>
        </head>
        <body>
        <div id="app"
             dangerouslySetInnerHTML={ { __html: renderToString(<Home/>) } }/>
        <script src="./App.js"></script>
        <script
            dangerouslySetInnerHTML={ { __html: "App.renderTo(document.getElementById('app'), " + JSON.stringify(state) + ");" } }/>
        </body>
        </html>,
    
    @asRenderer([ "!AppState.appState", "!AppState.someData", "!PostIt" ])
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
    
    @asRenderer
    PostIt: ( {
                  props: { record, onSelect, selected },
                  position, text, size,
                  editing,
                  doSave
              }, { $actions, $stores, $store } ) => {
        return (
            <Rnd
                absolutePos={ true }
                z={ selected ? 2000 : 1 }
                size={ size || record.size }
                position={ position || record.position }
                onDragStop={ doSave = () => $actions.AppState.updatePostIt(
                    {
                        ...record,
                        size    : size || record.size,
                        position: position
                    }) }
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
                        !editing &&
                        <div className={ "text" }>
                            { text }
                            <button onClick={ e => this.setState({ editing: true }) }
                                    className={ "edit" }>
                                🖋
                            </button>
                            <button onClick={ e => $actions.AppState.rmPostIt(record) }
                                    className={ "delete" }>
                                🖾
                            </button>
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
                            <button
                                onClick={ e => $store.setState({ editing: false }) }>💾
                            </button>
                        </div>
                    }
                </div>
            </Rnd>
        )
    },
}