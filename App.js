import React from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'


import VisibleHeader from './containers/VisibleHeader'

class App extends React.Component{
	constructor(props){
		super(props)
		
	}

	render(){
		return(
			<div >
				<VisibleHeader/>
				<Content/>
				<Footer/>
			</div>
			)
	}
};

export default App