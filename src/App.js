import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

//components
import Navigation from './components/navbar/Navigation'
import Dashboard from './components/Dashboard';
import Pokemon from './components/Pokemon';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PokemonList from './components/PokemonList';


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/pokemon/:id" component={Pokemon} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/pokelist" component={PokemonList} />
      </Switch>
    </Router>
  );
}

export default App;
