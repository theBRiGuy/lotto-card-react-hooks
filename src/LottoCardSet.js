import React, { Component } from 'react';
import { AddLottoCard } from './LottoCard'

class LottoCardSet extends Component {

  render() {

    const cards = () => {
      if (this.props.cards.length > 0) {
        return (
          <ul className="LottoCardList">
            {React.Children.toArray(this.props.cards)}
            {AddLottoCard()}
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
    );
  }
}

export default LottoCardSet;
