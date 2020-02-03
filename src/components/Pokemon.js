import React from "react";
import { connect } from "react-redux";

const Pokemon = props => {
  console.log(props);
  const { pokemon, pokemonNumber, pokeImg, pokeType, error, id } = props;
  if(error){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card z-depth-0">
              <div className="card-title red-text">
                <span>{error}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else
  if (pokemon){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 offset-m3'>
            <div className='card red'>
              <div className='card-content white-text'>
                <span className="card-title" id="titulo">
                  {pokemon} <span>#{pokemonNumber}</span>
                </span>
                <div id='card-separator'>
                  <div className="card-image" id="pokeImg">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
                  </div>
                  <div>
                    <span className='card-title' id="span-type" style={{fontWeight: "bold"}}>Type</span>
                    {pokeType &&
                      pokeType.map(type => (
                        <ul key={type.slot}>
                          <li id="Type">{type.type.name}</li>
                        </ul>
                      ))}
                  </div>
                </div>
              </div>
              {/* <div className='card-action'>
                <a href='#'>Add to my Pokemons</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
    <h1></h1>
    )
  }
};

const mapStateToProps = state => {
  console.log(state);
  
  if (state.pokemon.error){
    return{
      error: 'WRONG POKEMON NAME OR #'
    }
  }
  
  const pokemonData = state.pokemon.pokemonData;
  const pokemon = pokemonData.name;
  const pokemonNumber = pokemonData.id;
  const pokeImg = state.pokemon.pokeSprite;
  const pokeType = pokemonData.types;
  const id = pokemonData.id
  
  return {
    pokeData: pokemonData,
    pokemon,
    pokemonNumber,
    pokeImg,
    pokeType,
    id
  };
};

export default connect(mapStateToProps)(Pokemon);
