export default function Playlist(state=[],action){
	switch(action.type){
		case "ADD_TRACK":
			state.push(action.payload)
			return state
		case "DEL_TRACK":
			state.pop()
			return state
		default:
			return state
	}
	
};