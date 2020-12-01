import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import Card from 'react-bootstrap/Card';


function ProfileDetails(match) {

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
                        
                    <Button variant="primary">Edit Profile</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
}



export default ProfileDetails;
