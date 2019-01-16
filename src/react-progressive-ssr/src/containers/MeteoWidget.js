import React  from "react";
import Rnd    from "react-rnd";
import moment from "moment";


const MeteoInfos = ( { meteoData } ) =>
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
	</div>;


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
									       value={ state.searching !== undefined ? state.searching : record.location }
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
		);
	}
}