import React, { Component } from 'react'

import './styles.css'

export default class Cards extends Component {
	constructor(props) {
		super(props)
		this.state = { collection: this.props.collection }
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.collection !== this.props.collection) {
			this.setState({ collection: nextProps.collection })
		}
	}

	getImgComponent(card, index) {
		return (
			<img src={card.getImgSrc()} key={index} />
		)
	}

	getImgComponents = (collection) => {
		return (collection.map((card, index) => {

			<img src={card.getImgSrc()} key={index} />
		}))
	}
	
	render() {
		console.log('render')
		// console.log(this.getImgComponents(this.state.collection))
		return(
			<div className='cards'>
			{ this.state.collection.map((card, index) => 
				<img src={card.getImgSrc()} key={index} />
			)}
			</div>
		)
	}
}