import React, {useState, useEffect} from 'react';
import '../App.css';

import People from "../componenets/people";
import {Col, Row, Container} from 'react-bootstrap'
import NavSearch from "../componenets/navSearch";
import { fetchData } from "../api/api";
function Dashboard() {
    // useEffect(()=>{
    //     fetchApi();
    // },[]);
    const [data, setData] = useState([]);
   
    useEffect(async () => {
        const fetchedData = await fetchData();
        setData(fetchedData.data);
    },[]);

   
    // const fetchApi = async () => {
    //     const details = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    //     const items =  await details.json();
    //     // console.log(items.data);
    //     setData(items.data);
    // }
    let peopleCard = data.map(d=>{
        return(
            
            <Col sm="2" bsPrefix ="grid" key={d.itemId}>
                <People name={d.item.name} id={d.itemId} link={`/profile/${d.itemId}`} img={d.item.images.icon}/>
            </Col>
        );
    })

    
    return (
        <div>
            <NavSearch />
        <div className="dashboardArea">
            <h1>Dashboard</h1>
           
    <Container fluid bsPrefix="profileShow">
        <Row>
            {peopleCard}
            
        </Row>
       
    </Container>
            
        </div>
        </div>
    );
}



export default Dashboard;
