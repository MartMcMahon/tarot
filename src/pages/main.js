import React, { Component } from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'

import Deck from '../cards/deck'
import Cards from '../componenets/cards.component'

import './main.css'
export default class Main extends Component {

	constructor(props) {
		super()
		// this.onChange = this.onChange.bind(this)
		this.state = {
			deck: new Deck().shuffle(),
			collection: [],
			display: []
		}
	}

	drawSingle = () => {
		let card = this.state.deck.draw()
		if (card.value >= 0) {
			let newCollection = this.state.collection
			newCollection.push(card)
			this.setState({ collection: newCollection })
		}
	}

	drawThree = () => {
		this.drawX(3)
	}

	drawFive = () => {
		this.drawX(5)
	}

	drawX = (x) => {
		this.shuffle()
		let col = [x]
		for (let i = 0; i < x; i += 1) {
			col.push(this.state.deck.draw())
		}
		this.setState({ collection: col })
	}

	shuffle = () => {
		this.setState({ deck: new Deck().shuffle(), collection: [1] })
	}

	render() {
		return(
			<div>
				<ButtonGroup>
					<Button bsStyle="warning" onClick={this.shuffle}>shuffle</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button bsStyle="primary" onClick={this.drawSingle}>single</Button>
					<Button bsStyle="primary" onClick={this.drawThree}>three</Button>
					<Button bsStyle="primary" onClick={this.drawFive}>five</Button>
				</ButtonGroup>
				<Cards collection={ this.state.collection } >
				</Cards>
			</div>
		)
	}
}