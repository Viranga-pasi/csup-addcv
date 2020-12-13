import React, {useState, useEffect} from 'react';

import '../App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Navigation from "../componenets/navigation";
import { fetchData } from "../api/api";
function ProfileDetails(match) {
    
    // console.log(match.match.params.id);
    const [data, setData] = useState([]);
    
    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData.data);
    },[]);


    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // const fetchData = async () => {
    //     const details = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    //     const items =  await details.json();
    //     // console.log(items.data);
    //     setData(items.data);
    // }
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
            

            <Container className="profileArea">
            <Card className="profilePicArea" border="light">
                 <Card.Title>Welcom to {userDetails.name[userIndex]} portfolio</Card.Title> 
            </Card>
          
            <Row>
                <Col sm={4}>
                <Card className="profilePicArea" border="light">
                    <Card.Img variant="top" src=""/>
                    <Card.Body>
                        <Card.Title>{userDetails.name[userIndex]}</Card.Title>
                    <div className="container">
                        <div className="row">
                            <Card.Text>Connect with me</Card.Text>
                            <div>
                                <ul className="social-network social-circle">
                                <li><a href="#" className="icogithub" title="Github"><i className="fa fa-github"></i></a></li>
                                <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#" className="icoGoogle" title="Google +"><i class="fa fa-envelope"></i></a></li>
                                <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
               
                        
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={8}> 
                    <Card className="profilePicArea" border="light">
                    
                        <Card.Body>

                            <h5>Name</h5>
                            <Card.Text>{userDetails.name[userIndex]}</Card.Text>
                            <h5>Description</h5>
                            <Card.Text>{userDetails.dscrption[userIndex]}</Card.Text>
                            <h5>Type</h5>
                            <Card.Text>{userDetails.type[userIndex]}</Card.Text>
                            <h5>Cosmetic Id</h5>
                            <Card.Text>{userDetails.costId[userIndex]}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>
          </Container>
            
        </div>
    );
}



export default ProfileDetails;
