import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import logo from '../images/logo.png';
function Navigation() {
  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            You need to sign in before edit your profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Sign In</h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div>

    <Navbar bg="dark" variant="dark" expand="lg"  sticky="top" >
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
    <Button inline variant="outline-primary" onClick={() => setModalShow(true)}>Sign In</Button>
  </Navbar>
  <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
      />
  </div>
  );
}

export default Navigation;
