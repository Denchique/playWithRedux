import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

import Footer from './components/Footer'
// import Header from './components/Header'
import Content from './components/Content'
import Header from './components/Header'

// import VisibleHeader from './containers/VisibleHeader'

class App extends React.Component{
	constructor(props){
		super(props)
		
	}

	render(){
		return(
			<div >
				<Header/>
				<Content/>
				<Footer/>
			</div>
			)
	}
};

