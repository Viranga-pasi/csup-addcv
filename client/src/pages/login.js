import React, {useState, useEffect} from 'react';

import {Button} from 'react-bootstrap'
import {login} from "../features/userSlice"
import Form from 'react-bootstrap/Form'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchData } from "../api/api";
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
    <div className="dashboardArea">
      
      <Form onSubmit={(e)=>handleSubmit(e)} className = "loginArea">
            
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






            
              

        </Form>

    </div>
  );
}
export default Login;
