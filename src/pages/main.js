import React, { Component } from 'react'

import { Button, ButtonGroup } from 'react-bootstrap'

import Deck from '../cards/deck'
import Cards from '../componenets/cards.component'

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

	shuffle = () => {
		this.setState({ deck: new Deck().shuffle() })
	}

	render() {

		// let col = this.state.collection

		return(
			<div>
				<ButtonGroup>
					<Button bsStyle="warning" onClick={this.shuffle}>shuffle</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button bsStyle="primary" onClick={this.drawSingle}>single</Button>
				</ButtonGroup>
				<Cards collection={ this.state.collection } >
				</Cards>
			</div>
		)
	}
}