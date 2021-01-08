import React, {useState, useEffect} from 'react';
import './style/login.css';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { fetchData } from "../api/api";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {Button, Image} from 'react-bootstrap'
import logo from '../images/avatar.png';
import male from '../images/male.jpeg';
import female from '../images/female.jpg';
import { useForm, Controller } from 'react-hook-form'

function ProfileDetails(match) {
    const user = useSelector(selectUser);
   
    const [data, setData] = useState([]);

    const [imgage, setImage] = useState();
    const [sex, setSex] = useState();
    const [userImage, setUserImage] = useState();

    


    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData.data);

        setImage(logo);
        setSex('male');
        if(imgage != null){
            setUserImage(imgage);
        }
        else{
            if(sex === "male"){
                setUserImage(male);
            }
            else{
                setUserImage(female);

            }
        }
       
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

    const { handleSubmit, control} = useForm({mode: 'onBlur'});
    const onSubmit = async (data) => {
        alert("Your profile updated..!");
        console.log(data);
    }
   
    return (
        <div>
            {checkUser() ?  
              //  if user visit his profile
            <div>
                <div className="profileEdit">
        
                    <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form"> 
                        <h2 className="title">Hi {userDetails.name[userIndex]},</h2>
                   
                        <Form.Row className="justify-content-md-center">
                            <Col>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    
                                    <Controller
                                        as={<input type='text' />}
                                        control={control}
                                        defaultValue={userDetails.name[userIndex]}
                                        name='firstname'
                                        placeholder = 'First name'
                                    />
                                </div>
                            </Col>
                            <Col>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                    <Controller
                                        as={<input type='text' />}
                                        control={control}
                                        defaultValue={userDetails.name[userIndex]}
                                        name='lastname'
                                         placeholder = 'Last name'
                                    />
                            </div>
                            </Col>
                        </Form.Row>
                    
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                           
                            <Controller
                                as={<input type='email' />}
                                control={control}
                                defaultValue={userId.itemId[userIndex]}
                                name='email'
                                 placeholder = 'Email'
                            />
                        </div>
                       <div className="input-field">
                            <i className="fas fa-mobile-alt"></i>
                           
                            <Controller
                                as={<input type='text' />}
                                control={control}
                                defaultValue={userId.itemId[userIndex]}
                                name='number'
                                 placeholder = 'Contact Number'
                            />
                        </div>

                        <hr style={{color:'black', border:'2px solid black', width:'60%'}}/>
                        <h4>Social Links</h4>

                        <div className="input-field">
                            <i className="fa fa-facebook"></i>
                           
                            <Controller
                                as={<input type='text' />}
                                control={control}
                                // defaultValue={userId.itemId[userIndex]}
                                name='facebook'
                                placeholder = 'facebook'
                            />
                        </div>

                        <div className="input-field">
                            <i className="fa fa-github"></i>
                           
                            <Controller
                                as={<input type='text' />}
                                control={control}
                                // defaultValue={userId.itemId[userIndex]}
                                name='github'
                                placeholder = 'Github'
                            />
                        </div>

                        <div className="input-field">
                            <i className="fa fa-twitter"></i>
                           
                            <Controller
                                as={<input type='text' />}
                                control={control}
                                // defaultValue={userId.itemId[userIndex]}
                                name='twitter'
                                placeholder = 'Twitter'
                            />
                        </div>          

                        <div className="input-field">
                            <i className="fa fa-linkedin"></i>
                           
                            <Controller
                                as={<input type='text' />}
                                control={control}
                                // defaultValue={userId.itemId[userIndex]}
                                name='linkedin'
                                placeholder = 'Linkedin'
                            />
                        </div>

                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    
                    
                    </form>
               
                       
                    
                </div>
            </div>

             :  
            //  if not the actual user came
            <Container className="profileArea">
                <Card className="profilePicArea" border="light">
                        <Card.Title>Welcom to {userDetails.name[userIndex]} portfolio</Card.Title> 
                </Card>
                
                <Row>
                    <Col sm={4}>
                    <Card className="profilePicArea" border="light">
                        <Card.Img variant="top" src={userImage} roundedCircle/>

                        
                        <Card.Body>
                            <Card.Title>{userDetails.name[userIndex]}</Card.Title>
                        
                            <div className="row">
                                <Card.Text>Connect with me</Card.Text>
                                <div>
                                    <ul className="social-network social-circle">
                                    <li><a href="#" className="icogithub" title="Github"><i className="fa fa-github"></i></a></li>
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-envelope"></i></a></li>
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
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

                             
                                
                                    {/* {checkUser() ? <Button variant="success" type="submit" onClick={uploadCV}>ADD CV</Button>: <p></p>} */}
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>}
            
            
        </div>
    );
}



export default ProfileDetails;
