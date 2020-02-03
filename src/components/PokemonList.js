import React, { Component } from "react";
import axios from "axios";

export default class PokemonList extends Component {
  state = {
    pokemons: [],
    pokeRegion: "kanto"
  };

  async componentDidMount() {
    this.getPoke();
  }

  getPoke = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokedex/${this.state.pokeRegion}/`
    );
    this.setState({
      pokemons: res.data.pokemon_entries
    });
    console.log(this.state.pokemons);
  };
  render() {
    return (
      <div className='row'>
        <div className='col s12 m12'>
          {this.state.pokemons.map(pokemon => (
            <div className='col s12 m4' key={pokemon.entry_number}>
              <div className='card red'>
                <div className='card-content white-text'>
                  <div className='card-title' id="pokeListName">
                    <span >{pokemon.pokemon_species.name}</span>
                    <span className='right'>#{pokemon.entry_number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
