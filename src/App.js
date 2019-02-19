import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameCards from './GameCards';
import AppBar from './AppBar';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppBar />
        <GameCards />


      </div>
    );
  }
}

export default App;
