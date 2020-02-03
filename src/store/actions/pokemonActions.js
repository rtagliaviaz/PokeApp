import axios from 'axios'

export const getPokemon = (pokemon) => {
  return async (dispatch, getState) => {

    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      dispatch({
        type: 'GET_POKEMON',
        pokemon: pokemon,
        pokemonData: res.data,
        pokeSprite: res.data.sprites.front_default
      })
    } catch (err) {
      dispatch({
        type: 'GET_POKEMON_ERROR', err
      })
    }
  }
}