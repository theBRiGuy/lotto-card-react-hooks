import React, { Component } from 'react';
import LottoCardSet from './LottoCardSet';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LottoCardSet />
      </div>
    );
  }
}

export default App;
