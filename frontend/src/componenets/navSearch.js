import React, { useEffect, useState } from "react";
import {Navbar, Nav, Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../images/logo.png';
import { useForm } from "react-hook-form";
import Signin from "./signin";
import Search from "./search";
function NavSearch() {

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
            <Search/>
           <Signin/>
        </Navbar>
       
  </div>
  );
}

export default NavSearch;
