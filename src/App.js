import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import LottoCardSet from './LottoCardSet'
import './App.scss'

class App extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/landing' render={(props) =>
            <Landing {...props} />
          } />
          <Route exact path='/' render={(props) =>
            <LottoCardSet {...props} initialCards="3" />
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

export default App
