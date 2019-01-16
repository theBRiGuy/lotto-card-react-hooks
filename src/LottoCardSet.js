import React, { Component } from 'react';
import LottoCard from './LottoCard';

class LottoCardSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: this.props.cards || this.initBlankCards(this.props.numNewCards || 3) || []
    };

  }

  initBlankCards(numCards) {
    let cards = [];
    for (let i = 0; i < numCards; i++) {
      cards.push(<LottoCard />);
    }
    return cards;
  }

  render() {

    const cards = () => {
      if (this.state.cards.length > 0) {
        return (
          <ul className="LottoCardList">
            {React.Children.toArray(this.state.cards)}
          </ul>
        );
      } else {
        return (
          <p>No lotto cards!</p>
        );
      }
    };

    return (
      <div className="LottoCardSet">
        {cards()}
      </div>
    );
  }
}

export default LottoCardSet;
