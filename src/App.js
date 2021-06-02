import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="App-title">Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
