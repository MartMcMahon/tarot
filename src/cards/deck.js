const Suit = {
	0: 'cups',
	1: 'pents',
	2: 'swords',
	3: 'wands',
	4: 'ma'
}

const img = {
	'cups': {},
	'pents': 	{},
	'swords': {},
	'wands': 	{},
	'ma': {
		0: 'RWS_Tarot_00_Fool.jpg',
		1: 'RWS_Tarot_01_Magician.jpg',
		2: 'RWS_Tarot_02_High_Priestess.jpg',
		3: 'RWS_Tarot_03_Empress.jpg',
		4: 'RWS_Tarot_04_Emperor.jpg',
		5: 'RWS_Tarot_05_Hierophant.jpg',
		6: 'RWS_Tarot_06_Lovers.jpg',
		7: 'RWS_Tarot_07_Chariot.jpg',
		8: 'RWS_Tarot_08_Strength.jpg',
		9: 'RWS_Tarot_09_Hermit.jpg',
		10: 'RWS_Tarot_10_Wheel_of_Fortune.jpg',
		11: 'RWS_Tarot_11_Justice.jpg',
		12: 'RWS_Tarot_12_Hanged_Man.jpg',
		13: 'RWS_Tarot_13_Death.jpg',
		14: 'RWS_Tarot_14_Temperance.jpg',
		15: 'RWS_Tarot_15_Devil.jpg',
		16: 'RWS_Tarot_16_Tower.jpg',
		17: 'RWS_Tarot_17_Star.jpg',
		18: 'RWS_Tarot_18_Moon.jpg',
		19: 'RWS_Tarot_19_Sun.jpg',
		20: 'RWS_Tarot_20_Judgement.jpg',
		21: 'RWS_Tarot_21_World.jpg',
	}
}

const majorAcana = {
	0: 'The Fool',
	1: 'The Magician',
	2: 'The High Priestess',
	3: 'The Empress',
	4: 'The Emperor',
	5: 'The Hierophant',
	6: 'The Lovers',
	7: 'The Chariot',
	8: 'Strength',
	9: 'The Hermit',
	10: 'Wheel of Fortune',
	11: 'Justice',
	12: 'The Hanged Man',
	13: 'Death',
	14: 'Temperance',
	15: 'The Devil',
	16: 'The Tower',
	17: 'The Star',
	18: 'The Moon',
	19: 'The Sun',
	20: 'Judgement',
	21: 'The World'
}

export default class Deck extends Array {
	constructor() {
		console.log('new deck')
		super()
		for(let s = 0; s < 4; s += 1) {
			for(let v = 0; v < 14; v += 1) {
				this.push(new Card(s, v))
			}
		}
		for(let v = 0; v < 21; v += 1) {
			this.push(new Card(4, v))
		}
	}

	shuffle = () => {
		var m = this.length, t, i
		while (m) {
			i = Math.floor(Math.random() * m--)
			t = this[m]
			this[m] = this[i]
			this[i] = t
		}
		
		return this
	}

	draw = () => {
		if (this.length > 0)
			return this.shift()
		return { toString: () => {console.log('the deck is empty!')}}
	}
}

class Card {
	value
	suit
	flipped

	constructor(suit, value) {
		this.suit = suit
		this.value = value
		this.flipped = false
	}

	toString() {
		if (this.suit < 4) {
			return 'the ' + (this.value +1) + ' of ' + this.getSuit()
		}
		return this.getMajorArcana()
	}

	getMajorArcana() {
		return majorAcana[this.value]
	}

	getSuit() {
		switch(this.suit) {
			case 0: return 'Cups'
			case 1: return 'Pentacles'
			case 2: return 'Swords'
			case 3: return 'Wands'
			case 4: return 
		}
	}

	getImgSrc = () => {
		let suit = this.getSuit()
		if (this.suit === 1) suit = 'Pents'
		if (this.suit === 4) {
			return '/assets/cards/' + img[Suit[this.suit]][this.value]
		}
			return '/assets/cards/' + suit + ('0' + (this.value +1)).slice(-2) + '.jpg'
	}
}

