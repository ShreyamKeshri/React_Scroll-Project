import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/sign-in' component={SignIn} exact/>
      </Switch>
    </Router>
  );
}

export default App;
