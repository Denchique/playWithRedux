import React from "react"
import {render} from "react-dom"

export default class Header extends React.Component{
	constructor(props){
		super(props)
		
		this.headerClick = this.headerClick.bind(this)
		
	}
	componentDidMount(){
		
	}
	headerClick(){
		// this.props.store.dispatch({type:"ADD_TRACK",payload:'data from header component'})
		// console.log(this.props)
		console.log(this.props)
	}

	render(){
		return(
			<div>
			<h1 onClick={this.headerClick} >header </h1>
			</div>
			)
	}
}