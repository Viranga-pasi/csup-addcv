import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
function ProfileDetails(match) {
    const [modalShow, setModalShow] = React.useState(false);
    console.log(match.match.params.id);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const details = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items =  await details.json();
        // console.log(items.data);
        setData(items.data);
    }
    const userDetails = {
        name: data.map((d) => d.item.name),
        costId: data.map((d) => d.item.costmeticId),
        dscrption: data.map((d) => d.item.description),
        type: data.map((d) => d.item.type),
        
    };
    const userId = {
        itemId: data.map((d) => d.itemId),
 
    };
    
    let userIndex = 0;
    for(let i=0; i<userId.itemId.length; i++){
        if(match.match.params.id === userId.itemId[i]){
            userIndex = i;
        }
    }
    console.log("userIndex "+ userIndex);
    console.log("userName "+ userDetails.name[userIndex]);

    //pop up verical menu
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
        <div className="profileArea">
            <Card>
                <Card.Header>Welcome to {userDetails.name[userIndex]} porfolio</Card.Header>
                <Card.Body>
                    <Card.Title>{userDetails.name[userIndex]}</Card.Title>
                    <Card.Text>Name : {userDetails.name[userIndex]}</Card.Text>
                    <Card.Text>Description : {userDetails.dscrption[userIndex]}</Card.Text>
                    <Card.Text>Type : {userDetails.type[userIndex]}</Card.Text>
                    <Card.Text>Cosmetic Id : {userDetails.costId[userIndex]}</Card.Text>
                        
                    <Button variant="primary" onClick={() => setModalShow(true)}>Edit Profile</Button>
                </Card.Body>
            </Card>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
      />
        </div>
    );
}



export default ProfileDetails;
