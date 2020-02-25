import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import LottoCardSet from './LottoCardSet'
import './App.scss'

function App() {

  const NoMatch = () => <h1>Sorry, nothing to see here...</h1>;
  
  return (
    <main>
      <Switch>
        <Route exact path='/landing' render={(props) =>
          <Landing {...props} />
        } />
        <Route exact path='/' render={(props) =>
          <LottoCardSet {...props} initialCards={2} maxNums={7} />
        } />
        <Route component={NoMatch} />
      </Switch>
    </main>
  )
}

export default App
