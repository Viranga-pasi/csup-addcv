import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import logo from '../images/logo1.png';
// import Login from "./login";

import Logout from "./logout";

import { Link } from 'react-router-dom';



function Navigation(props) {
  
  
  
  
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

        {/* <div>
          {props.user ? <Nav style={{color : "white", padding : 5}}><Nav><i className="fas fa-user"></i></Nav>{props.user.name}</Nav> : <Nav></Nav>}

        </div>         */}


        <div>
          {props.user ? <Logout/> :<Button variant="primary" type="submit" ><Link to={"/login"} className="buttonLink"><i className="fas fa-sign-in-alt"></i> Login</Link></Button> }
         
        </div> 
      </Navbar>
     
  </div>
  );
}

export default Navigation;
