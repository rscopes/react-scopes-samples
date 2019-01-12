import superagent from "superagent";
import shortid    from "shortid";
import rscopes, {
	spells
}                 from "rscopes";

let { asStateMap, asScope } = spells;



export default {
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
		items: [{
			"_id"      : "rkUQHZrqM",
			"searching": "paris",
			"size"     : { "width": 200, "height": 200 },
			"text"     : "New Post It #0 somewhere we wait some new shit out there !",
			"position" : { "x": 321, "y": 167 }
		}, {
			"_id"     : "r1bcuMrcM",
			"size"    : { "width": 200, "height": 200 },
			"text"    : "do somethink",
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
			superagent.post('/', window.state = this.scopeObj.serialize())
			          .then(( e, r ) => {
				          console.log(e, r)
			          })
		}
	}
}