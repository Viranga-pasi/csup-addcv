import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./componenets/footer";
import HomePage from "./pages/homePage";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import ProfileDetails from "./pages/profileDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={ProfileDetails} />
        </Switch>

      </div>
     
    </Router>
  );
}

export default App;
