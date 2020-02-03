import React from 'react'
import { NavLink } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li><NavLink to="/signup" className="navbar-text">Signup</NavLink></li>
      <li><NavLink to="/signin" className="navbar-text">Login</NavLink></li>
    </ul>
  )
}
