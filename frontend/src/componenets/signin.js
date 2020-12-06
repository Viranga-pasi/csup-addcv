import React from 'react';

import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

function Footer() {
  
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
              Sign In to CSUP WEB
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
        <Button inline  variant="primary" onClick={() => setModalShow(true)}>Sign In</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default Footer;
