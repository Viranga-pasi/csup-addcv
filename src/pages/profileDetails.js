import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navigation from "../componenets/navigation";
function ProfileDetails(match) {
    
    // console.log(match.match.params.id);
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
        img: data.map((d)=> d.item.images)
        
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

 
    return (
        <div>
            <Navigation/>
            {/* <Card>
                <Card.Header>Welcome to {userDetails.name[userIndex]} porfolio</Card.Header>
                <Card.Body>
                    <Card.Title>{userDetails.name[userIndex]}</Card.Title>
                    <Card.Text>Name : {userDetails.name[userIndex]}</Card.Text>
                    <Card.Text>Description : {userDetails.dscrption[userIndex]}</Card.Text>
                    <Card.Text>Type : {userDetails.type[userIndex]}</Card.Text>
                    <Card.Text>Cosmetic Id : {userDetails.costId[userIndex]}</Card.Text>
                        
                   
                </Card.Body>
            </Card> */}

          <Container className="profileArea">
          <Card.Title>Welcom to {userDetails.name[userIndex]} portfolio</Card.Title>
            <Row>
              <Col sm={4}>
              
                <Card.Img variant="top" src=""/>
                <h2>{userDetails.name[userIndex]}</h2>
                <div className="container">
                    <div className="row">
                    <Card.Text>Connect with me</Card.Text>
                    <div>
                        <ul className="social-network social-circle">
                        <li><a href="#" className="github" title="Github"><i class="fa fa-github"></i></a></li>
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" className="icoGoogle" title="Google +"><i class="fa fa-envelope"></i></a></li>
                        <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
              </Col>
              <Col sm={8}> 
                <h5>Name</h5>
                <Card.Text>{userDetails.name[userIndex]}</Card.Text>
                <h5>Description</h5>
                <Card.Text>{userDetails.dscrption[userIndex]}</Card.Text>
                <h5>Type</h5>
                <Card.Text>{userDetails.type[userIndex]}</Card.Text>
                <h5>Cosmetic Id</h5>
                <Card.Text>{userDetails.costId[userIndex]}</Card.Text></Col>
              
            </Row>
          </Container>
            
        </div>
    );
}



export default ProfileDetails;
