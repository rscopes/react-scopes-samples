/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

import React                              from 'react';
import {asStore, scopeToProps, withScope} from "react-scopes";
import shortId                            from 'shortid';

import "./App.scss"


@withScope(
	{
		@asStore
		todo: {
			tasks  : [{ id: "someId", text: "somethink todo" }],
			addTask: ( task ) => state => ({ tasks: [{ ...task, id: shortId.generate() }, ...state.tasks] }),
			rmTask : ( taskId ) => state => ({ tasks: state.tasks.filter(task => (task.id !== taskId)) })
		}
	}
)
@scopeToProps("todo")
class TodoList extends React.Component {
	input = React.createRef();
	
	catchEnter = ( e ) => {
		if ( e.keyCode == 13 )
			this.addTask()
	};
	addTask    = ( e ) => {
		let text = this.input.current.value;
		this.props.$actions.addTask({ text });
		this.input.current.value = "";
		this.input.current.focus();
	};
	
	render() {
		let { todo, title, $actions } = this.props;
		return <div className={"TodoList"}>
			<div className={"title"}>
				{title}
			</div>
			<div className={"addTaskInput"}>
				<input type={"text"} ref={this.input} placeholder={"Add some stuff todo"} onKeyUp={this.catchEnter}/>
				<button onClick={this.addTask}>Add task</button>
			</div>
			<div className={"items"}>
				{
					todo.tasks.map(
						task =>
							<div key={task.id}>
								{task.text}&nbsp;
								<button onClick={$actions.rmTask.bind(null, task.id)}>X</button>
							</div>
					)
				}
			</div>
		</div>
	}
}

@withScope({
	           @asStore
	           appState: {
		           columns: [{ label: "Todo" }, { label: "inProgress" }, { label: "complete" }],
		           saveState() {
			           localStorage.setItem("todo", JSON.stringify(this.$scope.serialize({ alias: "App" })))
		           },
	           }
           },
           __IS_SERVER__ ?
           {}
                         :
           {
	           snapshot: localStorage.getItem("todo") && JSON.parse(localStorage.getItem("todo"))
           }
)
@scopeToProps("appState")
export default class App extends React.Component {
	
	render() {
		let { appState, $actions } = this.props;
		return <div>
			<div className={"appBar"}>
				<div className={"title"}>Todo App</div>
				<button onClick={$actions.saveState}>Save</button>
			</div>
			
			{
				appState.columns.map(
					( { label } ) => <TodoList key={label} title={label}/>
				)
			}
		</div>
	}
}
