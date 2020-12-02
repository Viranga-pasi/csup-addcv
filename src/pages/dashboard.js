import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
function Dashboard() {
    useEffect(()=>{
        fetchData();
    },[]);

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const details = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items =  await details.json();
        // console.log(items.data);
        setData(items.data);
    }
   

   
    return (
        <div className="dashboardArea">
            <h1>Dashboard</h1>
           
            {/* {data.map(d =>(
                 <Button variant="primary" size="lg" block key={d.itemId}>
                    <Link to={`/profile/${d.itemId}`} className="link">
                        {d.item.name}
                    </Link>
                </Button>
            ))}
            */}


           {data.map(d =>(
                <Card style={{ width: '18rem' }} key={d.itemId}>
                    <Card.Img variant="top" src={d.item.images.icon} />
                    <Card.Body>
                        <Card.Title>{d.item.name}</Card.Title>
                        <Card.Text>
                            {d.itemId}
                        </Card.Text>
                        <Button variant="primary" size="lg" block key={d.itemId}>
                            <Link to={`/profile/${d.itemId}`} className="link">
                                View Profile
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}



export default Dashboard;
