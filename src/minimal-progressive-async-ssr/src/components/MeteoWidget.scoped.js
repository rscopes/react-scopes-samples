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
		MeteoSearch: {
			// bind record values as initial values
			@asRef
			record: "record",
			
			// initial state value
			src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
			
			// the function that apply changes in the state, if needed
			$apply( data = {}, state, { location, results, record } ) {
				location = location || record.location;
				
				if ( location == data.location && data.results )
					return data;
				
				// do query meteo if needed
				if ( location ) {
					this.wait();
					console.log("query")
					superagent
						.get(state.src + location)
						.then(( res ) => {
							if ( location !== data.location )
								return;
							console.log("result")
							try {
								this.push({ results: res.body, location })
								// update the record
								
								this.$actions.updatePostIt(
									{
										...state.record,
										//results: res.body,
										location
									});
							} catch ( e ) {
								this.push({ results: null, location });
							}
							
						})
						.then(e => this.release())
						.catch(e => this.release())
				}
				;
				return state;
			},
			// $actions.updateSearch
			updateSearch( location ) {
				let state = this.nextState, results = {};
				
				if ( location == state.location ) return;
				if ( location.length < 4 )
					return { location };
				
				return { location };
			}
		}
	}, { key: 'postIt' }
)
@scopeToProps(["MeteoSearch", "record"])
export default class sMeteoWidget extends MeteoWidget {
};