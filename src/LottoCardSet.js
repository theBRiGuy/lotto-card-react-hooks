import React, { Component } from 'react'

class LottoCardSet extends Component {

  addLottoCard() {
    return (
      <li className="LottoCardListItem">
        <button
          className="LottoCardListItem__AddButton"
          onClick={this.props.onAddCard}
        >
          Click to<br/>Add Card
        </button>
      </li>
    )
  }

  render() {
    const cards = () => {
      if (this.props.cards.length > 0) {
        return (
          <ul className="LottoCardList">
            {React.Children.toArray(this.props.cards)}
            {this.addLottoCard()}
          </ul>
        )
      } else {
        return (
          <p>No lotto cards!</p>
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
