import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends React.Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };

  render() {
    function leadingZeroNum(num) {
      if (('' + num).length === 1) {
        return `00${num}`;
      }
      if (('' + num).length === 2) {
        return `0${num}`;
      }

      return num;
    }

    return (
      <div>
        <h2
          className={this.props.isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}
        >
          {this.props.isWinner ? 'WINNER!' : 'LOSER!'}
        </h2>
        <p className="Pokedex-game">Total Experience: {this.props.exp}</p>
        <div className="Pokedex">
          {this.props.pokemon.map((poke) => (
            <Pokecard
              key={poke.id}
              name={poke.name}
              img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${leadingZeroNum(
                poke.id
              )}.png`}
              type={poke.type}
              exp={poke.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
