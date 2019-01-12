import superagent                 from "superagent";
import MeteoWidget                from './MeteoWidget';
import {
	Store, reScope, scopeRef, scopeToProps, propsToStore, scopeToState, propsToScope, Scope
}                                 from "rscopes";
import {asStore, asRef, asRefTpl} from "rscopes/spells";


@propsToScope(["record"])// put the record in the scope so it can be targeted with asRef
@reScope(
	{
		@asStore
		DaSearch: {
			// bind record values as initial values
			@asRef
			record   : "record",
			@asRef
			searching: "record.searching",
			@asRef
			results  : "record.results",
			
			// initial state value
			src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
			
			// the function that apply changes in the state, if needed
			$apply( data = {}, state, { searching = state.searching } ) {
				if ( searching == data.searching && data.results )
					return data;
				
				// do query meteo if needed
				searching &&
				(this.wait(), console.log("query"), superagent
					.get(state.src + searching)
					.then(( res ) => {
						console.log("result")
						if ( searching != this.nextState.searching )
							return this.release();
						try {
							this.push({ results: res.body, searching })
							// update the record
							this.$actions.updatePostIt(
								{
									...state.record,
									results: res.body,
									searching
								});
							
						} catch ( e ) {
							this.push({ results: null, searching });
						}
						this.release();
						
					}).catch(e => this.release()));
				return state;
			},
			// $actions.updateSearch
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
@scopeToProps(["DaSearch", "record"])
export default class sMeteoWidget extends MeteoWidget {
};