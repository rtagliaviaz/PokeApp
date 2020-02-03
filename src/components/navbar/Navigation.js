import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'

//components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navigation(props) {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
  return (
    <nav className="nav-wrapper red">
      <div className="container">
        <Link to='/' id="logo"className="brand-logo left navbar-text">PokeApp</Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect (mapStateToProps)(Navigation)