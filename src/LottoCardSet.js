import React, { Component } from 'react'
import LottoCard from './LottoCard'

class LottoCardSet extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: LottoCardSet.blankCards(this.props.initialCards)
    }

    this.handleAddCard = this.handleAddCard.bind(this)
    this.handleRemoveCard = this.handleRemoveCard.bind(this)
  }

  static blankCards(n) {
    const cards = []
    for (let i = 0; i < n; i++) {
      // Generate a unique card ID
      cards.push({id: Date.now() + Math.random()})
    }
    return cards
  }

  handleAddCard() {
    this.setState(oldState => ({ cards: [...oldState.cards, ...LottoCardSet.blankCards(1)]}))
  }

  handleRemoveCard(id) {
    this.setState(oldState => ({ cards: oldState.cards.filter(item => item.id !== id)}))
  }

  render() {
    const noCards = (this.state.cards.length) ? null : <p className="LottoCardSet__noCards">No lotto cards!</p>
    const addLottoCard = (
      <li className="LottoCardListItem">
        <button
          className="LottoCardListItem__AddButton"
          onClick={this.handleAddCard}
        >
          Click to<br />Add Card
        </button>
      </li>
    )

    return (
      <div className="LottoCardSet">
        {noCards}
        <ul className="LottoCardSet__lottoCardList">
          {this.state.cards.map(card => <LottoCard handleRemoveCard={this.handleRemoveCard} key={card.id} id={card.id} maxNums={this.props.maxNums} />)}
          {addLottoCard}
        </ul>
      </div>
    )
  }
}

export default LottoCardSet
