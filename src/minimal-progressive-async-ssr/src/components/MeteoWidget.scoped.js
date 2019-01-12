import superagent       from "superagent";
import MeteoWidget      from './MeteoWidget';
import {
	Store, reScope, scopeRef, scopeToProps, propsToStore, scopeToState, propsToScope, Scope, spells
}                       from "rscopes";
import {renderToString} from "react-dom/server"

let { asStateMap } = spells;

@propsToScope(["record"])// put the record in the scope
@reScope(
	{
		@asStateMap
		DaSearch: {
			@scopeRef
			record   : "record",// get props.record.searching as initial search value
			@scopeRef
			searching: "record.searching",// get props.record.searching as initial search value
			@scopeRef
			results  : "record.results",// get props.record.searching as initial search value
			
			src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
			
			$apply( data = {}, state, { searching = state.searching } ) {
				if ( searching == data.searching && data.results )
					return data;
				
				//
				searching &&
				(this.wait(), superagent
					.get(state.src + searching)
					.then(( res ) => {
						this.release();
						if ( searching != this.nextState.searching ) return;
						try {
							this.push({ results: res.body, searching })
							this.$actions.updatePostIt(
								{
									...state.record,
									results: res.body,
									searching
								});
						} catch ( e ) {
							this.push({ results: null, searching });
						}
						
					}).catch(e => this.release()));
				return state;
			},
			updateSearch( searching ) {
				let state = this.nextState, results = {};
				
				if ( searching == state.searching ) return;
				if ( searching.length < 4 )
					return { searching };
				
				return { searching };
			}
		}
	}, { key: 'postIt' }
)
@scopeToProps(
	{
		@scopeRef
		DaSearch: "DaSearch",
		@scopeRef
		record  : "record"
	})
export default class sMeteoWidget extends MeteoWidget {
};