import superagent          from "superagent";
import MeteoWidget         from './MeteoWidget';
import {
	Store, reScope, scopeRef, scopeToProps, propsToStore, scopeToState, propsToScope, Scope
}                          from "rscopes";
import {asStateMap, asRef} from "rscopes/spells";
import {renderToString}    from "react-dom/server"


@propsToScope(["record"])// put the record in the scope
@reScope(
	{
		@asStore
		DaSearch: {
			@asRef
			record   : "record",// get props.record.searching as initial search value
			@asRef
			searching: "record.searching",// get props.record.searching as initial search value
			@asRef
			results  : "record.results",// get props.record.searching as initial search value
			
			src: "http://api.openweathermap.org/data/2.5/weather?&APPID=ecff7b21b7305a6f88ca6c9bc4f07027&q=",
			
			$apply( data = {}, state, { searching = state.searching } ) {
				if ( searching == data.searching && data.results )
					return data;
				
				searching &&
				(this.wait(), superagent
					.get(state.src + searching)
					.then(( res ) => {
						if ( searching != this.nextState.searching )
							return this.release();
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
						this.release();
						
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
@scopeToProps(["DaSearch", "record"])
export default class sMeteoWidget extends MeteoWidget {
};