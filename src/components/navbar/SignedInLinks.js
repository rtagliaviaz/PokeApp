import React from 'react'
import { NavLink } from "react-router-dom";
import { connect }  from "react-redux"
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      {/* <li><NavLink to="/myPoke" className="navbar-text">My Pokemons</NavLink></li> */}
      <li><NavLink to="/pokelist" className="navbar-text">Pokemon List</NavLink></li>
      <li><a onClick={props.signOut} className="navbar-text">Logout</a></li>
      {/* <li><NavLink to="/" className="btn btn-floating pink lighten-1">Appu</NavLink></li> */}
    </ul>   
  )
}

const mapDispatchToProps = dispatch => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect (null, mapDispatchToProps)(SignedInLinks)
