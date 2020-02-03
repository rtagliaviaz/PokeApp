import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state)
  }

  render() {
    const {auth, authError} = this.props;
    if (auth.uid) return <Redirect to="/"/>
    return (
      <div className="container">
        <form  className="white" onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange}/> 
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChange}/> 
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={this.onChange}/> 
          </div>
          <div className="input-field">
            <button className="btn red">Sign Up</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)