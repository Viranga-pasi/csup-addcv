import React from "react";

import "./App.css";
import Naviagtion from "./componenets/navigation";
import HomePage from "./pages/homePage";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import ProfileDetails from "./pages/profileDetails";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {

  const user = useSelector(selectUser);

  
  return (
    <Router>
      <div className="App">
        <Naviagtion user={user}/>
        <Switch>
          
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/:id" component={ProfileDetails} />
        </Switch>

      </div>
      
    </Router>
  );
}

export default App;
