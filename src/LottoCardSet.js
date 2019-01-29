import React, { Component } from 'react'
import LottoCard from './LottoCard'

class LottoCardSet extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: this.createBlankCards(this.props.initialCards)
    }

    this.handleCardCountChange = this.handleCardCountChange.bind(this)
    this.handleAddCard = this.handleAddCard.bind(this)
  }

  createBlankCards(n) {
    const cards = []
    for (let i = 0; i < n; i++) {
      cards.push(<LottoCard />)
    }
    return cards
  }

  handleCardCountChange(n) {
    const that = this
    this.setState({
      cards: function() {
        const oldCards = that.state.cards
        if (oldCards.length > n) {
          return that.state.cards.slice(0, n)
        } else if (oldCards.length < n) {
          const updatedSet = oldCards.concat(that.createBlankCards(n - oldCards.length))
          return updatedSet
        } else {
          return oldCards
        }
      }()
    })
  }

  handleAddCard() {
    this.handleCardCountChange(this.state.cards.length + 1)
  }

  addLottoCard() {
    return (
      <li className="LottoCardListItem">
        <button
          className="LottoCardListItem__AddButton"
          onClick={this.handleAddCard}
        >
          Click to<br/>Add Card
        </button>
      </li>
    )
  }

  render() {
    const cards = () => {
      if (this.state.cards.length > 0) {
        return (
          <ul className="LottoCardSet__lottoCardList">
            {React.Children.toArray(this.state.cards)}
            {this.addLottoCard()}
          </ul>
        )
      } else {
        return (
          <p className="LottoCardSet__noCards">No lotto cards!</p>
        )
      }
    }

    return (
      <div className="LottoCardSet">
        {cards()}
      </div>
    )
  }
}

export default LottoCardSet
