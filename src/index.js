import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import firebase from './config/fbConfig'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'

import 'firebase/firestore';

const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true
}

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({
    getFirebase, getFirestore})),
    reduxFirestore(firebase),
  ));

const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded> 
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));


