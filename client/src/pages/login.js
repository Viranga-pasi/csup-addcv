import React, {useState, useEffect} from 'react';
import './style/login.css';
import {Button} from 'react-bootstrap'
import {login} from "../features/userSlice"
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchData } from "../api/api";
import { ReactComponent as Login_img } from '../images/login_img.svg';
function Login({location}) {
  
    const history = useHistory();
    const [data, setData] = useState([]);
   
    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData.data);
    },[]);

    const userDetails = {
        name: data.map((d) => d.item.name),

    };
    
    // const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    
    const dispatch = useDispatch();
    function ciEquals(a, b) {
        return typeof a === 'string' && typeof b === 'string'
            ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
            : a === b;
    }
    let validate = null;
    const handleSubmit = (e) =>{
        e.preventDefault();
        for(let i=0; i<data.length; i++){
            
            if(ciEquals(name, userDetails.name[i])){
                dispatch(login({
                    name: name,
                    password: password,
                    loggedIn: true,
                }));
                history.goBack();
                return;
            }
            else{
               validate = 10;
            }
        }
        alert("Invalid userName or Password..!!");
       
    }

  
    
   
  return (
    <div>
      
      {/* <Form onSubmit={(e)=>handleSubmit(e)} className = "loginArea">
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> */}
        <div className="workArea">
            <div className="forms-workArea">
                <div className="signin-signup">

                    <form onSubmit={(e)=>handleSubmit(e)} className="sign-in-form"> 
                    <h2 className="title">SIGN IN</h2>
                    
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="name" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
                    </div>

                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                    
                    
                    </form>
                </div>
                <div className="panels-workArea">
                    <div className="panel left-panel">
                    
                        <Login_img className="image"/>
            
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
