const initState = {
  pokemon: '',
  pokemonData: '',
  pokeSprite: '',
  error: false
}

const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      console.log('successfull', action.pokemon)
      return state = {
        pokemon: action.pokemon,
        pokemonData: action.pokemonData,
        pokeSprite: action.pokeSprite,
        error: false
      }
    case 'GET_POKEMON_ERROR':
      console.log('WRONG NAME OR POKEMON #', action.err)
      return state = {
        error: true
      }
    default:
      return state
  }
}

export default pokemonReducer