import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
  render() {
    const { img, name, type, exp } = this.props;
    return (
      <div className="Pokecard">
        <p className="Pokecard-name">{name} </p>
        <img className="Pokecard-img" src={img} alt="" />
        <p className="Pokecard-stats">Type: {name}</p>
        <p className="Pokecard-stats">EXP: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
