import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'



function Login() {
  
    const [modalShow, setModalShow] = React.useState(false);
    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const onSubmit = (data) => {
      setEmail(data.email);
      setPassword(data.password);
      setModalShow(false);
      console.log(data);
    };
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
              LOGIN to CSUP WEB
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Form here */}

              <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" ref={register} name="email" />
                      <Form.Text className="text-muted">
                      </Form.Text>
                  </Form.Group>
  
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" ref={register} name="password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
              </Form>

              {/* ----------------------- */}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  return (
    <div>
        <Button inline  variant="primary" onClick={() => setModalShow(true)}>LOGIN</Button>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default Login;
