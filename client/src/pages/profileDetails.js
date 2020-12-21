import React, {useState, useEffect} from 'react';

import '../App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { fetchData } from "../api/api";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../images/fieldvisit.jpg';
function ProfileDetails(match) {
    const user = useSelector(selectUser);
   
    const [data, setData] = useState([]);
 
    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData.data);
       
    },[]);

    function ciEquals(a, b) {
        return typeof a === 'string' && typeof b === 'string'
            ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
            : a === b;
    }

    function checkUser(){
        if(!user){
            return false;
        }
        else{
            if(ciEquals(user.name, userDetails.name[userIndex])){
                return true;
            }
            else{
                return false;
            }
        }
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
           
            

            <Container className="profileArea">
            <Card className="profilePicArea" border="light">
                 <Card.Title>Welcom to {userDetails.name[userIndex]} portfolio</Card.Title> 
            </Card>
          
            <Row>
                <Col sm={4}>
                <Card className="profilePicArea" border="light">
                    <Card.Img variant="top" src={logo} roundedCircle/>
                    
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

                            {checkUser() ? <Button variant="success" type="submit" >Add CV</Button>: <p></p>}

                        </Card.Body>
                    </Card>
                </Col>
              
            </Row>
          </Container>
            
        </div>
    );
}



export default ProfileDetails;
