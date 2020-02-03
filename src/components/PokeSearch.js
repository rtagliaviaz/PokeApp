import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPokemon } from '../store/actions/pokemonActions'

class PokeSearch extends Component {
  state = {
    pokemon: ''
  }

  onChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.getPokemon(this.state.pokemon)
  }
  
  render() {
    return (
    <div className="container">
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Pokemon Search</h5>
          <div className="input-field">
            
            <input placeholder="Pokemon Name or #" type="text" id="pokemon" onChange={this.onChange}/> 
          </div>
        </form>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPokemon: (pokemon) => dispatch(getPokemon(pokemon))
  }
}

export default connect(null, mapDispatchToProps)(PokeSearch)
