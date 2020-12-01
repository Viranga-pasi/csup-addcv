import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './componenets/navigation';
import HomePage from './pages/homePage';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
     
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
   </Router>
    
  );
}



export default App;
