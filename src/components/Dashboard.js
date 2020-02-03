import React from 'react'
import PokeSearch from './PokeSearch'
import Pokemon from './Pokemon'
import {connect} from 'react-redux'

const Dashboard = props =>{
  const {auth} = props
  const display = auth.uid ? <PokeSearch /> : null
  return (
    <div>
      {display}
      <Pokemon />
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Dashboard)

