import React from "react";
import Rnd   from "react-rnd";

export default class PostIt extends React.Component {
	
	state = {};
	
	saveState = ( e, d ) => {
		let { $actions, MeteoSearch, record } = this.props;
		$actions.updatePostIt(
			{
				...record,
				location: MeteoSearch.location,
				size    : this.state.size || record.size,
				position: this.state.position || record.position
			});
	};
	
	render() {
		let {
			    record: { position, size } = {},
			    record,
			    MeteoSearch,
			    $actions, onSelect, selected
		    }     = this.props,
		    state = this.state;
		return (
			<Rnd
				absolutePos
				z={ selected ? 2000 : 1 }
				size={ state.size || size }
				position={ state.position || position }
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
						!this.state.editing &&
						<div className={ "text" }>
							{ MeteoSearch.location }
							{
								MeteoSearch.results &&
								MeteoSearch.results.weather[0] &&
								<img
									src={ "http://openweathermap.org/img/w/" + MeteoSearch.results.weather[0].icon + '.png' }></img>
							}
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
										       this.setState({ searching: e.target.value })
										       $actions.updateSearch(e.target.value);
									       } }
									       value={ state.searching }
									       onMouseDown={ e => e.stopPropagation() }/>
								</div>
							}
							{
								MeteoSearch.results &&
								MeteoSearch.results.weather[0] &&
								<img
									src={ "http://openweathermap.org/img/w/" + MeteoSearch.results.weather[0].icon + '.png' }></img>
							}
							<button
								onClick={ e => this.setState({ editing: false }) }>💾
							</button>
						</div>
					}
				</div>
			</Rnd>
		);
	}
}