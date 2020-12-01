import React from 'react';
import { Navbar,Nav} from 'react-bootstrap';


function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">CSUP Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
