import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import connect from 'react-redux'
import App from './App'
import {createStore} from 'redux'
import reducer from './reducers/index'

// components


const store = createStore(reducer);
store.dispatch({type: 'ADD_TRACK',payload: ' some text... '});

store.subscribe( ()=> {
	console.log("subscribe func !!! ")
})


// just test ...
// store.dispatch({type: 'INCREMENT',payload: 1});
// store.dispatch({type: 'INCREMENT',payload: 1});
// store.dispatch({type: 'INCREMENT',payload: 1});
// console.log(store.getState())
// store.dispatch({type: 'ADD_TRACK',payload: ' some text... '});
// console.log(store.getState())




render(
	<div>
		<Provider store={store}>
			<App/>
		</Provider>
	</div>
	,document.getElementById('root')
	);



