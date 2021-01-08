import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import logo from '../images/logo.png';
import Search from "./searchbar";
import { Link } from 'react-router-dom';
function NavSearch() {

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
              </Nav>
            </Navbar.Collapse>
            <Search/>
           
        </Navbar>
       
  </div>
  );
}

export default NavSearch;
