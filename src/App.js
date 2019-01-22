import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import LottoCardSet from './LottoCardSet'
import LottoCard from './LottoCard'
import './App.scss'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cards: this.createBlankCards(this.props.initialCards)
    }

    this.handleCardCountChange = this.handleCardCountChange.bind(this)
    this.handleAddCard = this.handleAddCard.bind(this)
  }

  createBlankCards(n) {
    const cards = [];
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

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/landing' render={(props) =>
            <Landing {...props} onCardCountChange={this.handleCardCountChange} />
          } />
          <Route exact path='/' render={(props) =>
            <LottoCardSet {...props} cards={this.state.cards} onAddCard ={this.handleAddCard} />
          } />
          <Route component={NoMatch} />
        </Switch>
      </main>
    )
  }
}

const NoMatch = () => (
  <h1>Sorry, nothing to see here...</h1>
)

export default App;
