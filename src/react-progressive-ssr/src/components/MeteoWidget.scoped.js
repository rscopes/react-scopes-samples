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
			// bind record from the store
			@asRef
			record: "record",
			
			// initial state value
			src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
			
			// the function that apply changes in MeteoSearch state, if needed
			$apply( data = {}, state, { location, results, record } ) {
				location = location || state.record.location;
				
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
				}
				
				return {location};
			},
			
			// $actions.updateSearch
			updateSearch( location ) {
				if ( location.length < 4 )
					return { location };
				
				return { location };
			}
		}
	}, { key: 'postIt' }
)
// finally inject the stores
@scopeToProps(["MeteoSearch", "record"])
export default class sMeteoWidget extends MeteoWidget {
};