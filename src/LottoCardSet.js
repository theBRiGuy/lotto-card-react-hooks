import React, { useState } from 'react'
import LottoCard from './LottoCard'

function LottoCardSet(props) {

  // functions required for state
  const blankCards = (n) => {
    const cards = [];
    for (let i = 0; i < n; i++) {
      // Generate a unique card ID
      cards.push({ id: Date.now() + Math.random() });
    }
    return cards;
  }

  // card state
  const [cards, setCards] = useState(blankCards(props.initialCards));

  // event handlers
  const handleAddCard = () => {
    setCards([...cards, ...blankCards(1)])
  }

  const handleRemoveCard = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  // JSX functions
  const noCards = (cards.length) ? null : <p className="LottoCardSet__noCards">No lotto cards!</p>

  const addLottoCard = (
    <li className="LottoCardListItem">
      <button
        className="LottoCardListItem__AddButton"
        onClick={handleAddCard}
      >
        Click to<br />Add Card
      </button>
    </li>
  )

  return (
    <div className="LottoCardSet">
      <h1>Select your numbers, {props.maxNums} per card:</h1>
      {noCards}
      <ul className="LottoCardSet__lottoCardList">
        {cards.map(card => (
          <LottoCard
            handleRemoveCard={handleRemoveCard}
            key={card.id}
            id={card.id}
            maxNums={props.maxNums}
          />
        ))}
        {addLottoCard}
      </ul>
    </div>
  )
}

export default LottoCardSet
