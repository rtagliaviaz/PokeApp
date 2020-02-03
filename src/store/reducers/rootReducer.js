import pokemonReducer from './pokemonReducer'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default rootReducer