import React, { Component } from 'react'

import './styles.css'

export default class Cards extends Component {
	constructor(props) {
		super(props)
		let col = this.props.collection
		let layout = col.shift()
		this.state = { collection: col, layout: layout }
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.collection !== this.props.collection) {
			let col = nextProps.collection
			let layout = col.shift()
			this.setState({ collection: col, layout: layout })
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
		return(
			<div className='cards'>
			{ this.state.collection.map((card, index) => 
				<img src={card.getImgSrc()} key={index} />
			)}
			</div>
		)
	}
}