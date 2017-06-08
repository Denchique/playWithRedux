import {createStore} from 'redux'
import reducer from './reducers/index'


const store = createStore(reducer);
store.dispatch({type: 'ADD_TRACK',payload: ' some text... '});

// store.subscribe( ()=> {
// 	console.log("triggered!!! ")
// })

store.dispatch({type: 'INCREMENT',payload: 1});
store.dispatch({type: 'INCREMENT',payload: 1});
store.dispatch({type: 'INCREMENT',payload: 1});
console.log(store.getState())
store.dispatch({type: 'ADD_TRACK',payload: ' some text... '});
console.log(store.getState())





