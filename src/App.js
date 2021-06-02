import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Pokedex</h1>
        <Pokegame />
      </div>
    );
  }
}

export default App;
