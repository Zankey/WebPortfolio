import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameCards from './GameCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
        <GameCards />

        </header>

      </div>
    );
  }
}

export default App;
