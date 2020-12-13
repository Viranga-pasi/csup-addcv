import React from 'react';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'

import logo from '../images/logo.png';
import Login from "./login";


function Navigation() {
  
  
  
  return (
    <div>

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="50"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          CSUP WEB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
        <div>
        
       <Login/>
        </div> 
      </Navbar>
     
  </div>
  );
}

export default Navigation;
