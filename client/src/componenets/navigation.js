import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import logo from '../images/logo.png';
// import Login from "./login";
import Login from "../pages/login";
import Logout from "./logout";

import { Link } from 'react-router-dom';
import { logout } from '../features/userSlice';


function Navigation(props) {
  
  if(!props.user){
    console.log("User not here");
  }
  else{
    console.log("user here");
  }
  
  
  return (
    <div>

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        
        <Navbar.Brand>
        <Link to={"/"} className="link"><img
            alt=""
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-top"
          />{' '}
         
          </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            
            <Nav.Link><Link to={"/"} className="link">Home</Link></Nav.Link>
            <Nav.Link><Link to={"/dashboard"} className="link">Dashboard</Link></Nav.Link>
            {/* <Nav.Link><Link to={"/login"} className="link">Login</Link></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      
        <div>

          {props.user ? <Logout/> :<Button variant="primary" type="submit" ><Link to={"/login"} className="link">Login</Link></Button> }
          {/* <Button variant="primary" type="submit" ><Link to={"/login"} className="link">Login</Link></Button>  */}
          {/* <Login/> */}
        </div> 
      </Navbar>
     
  </div>
  );
}

export default Navigation;
