import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
            {/* <Button variant="primary" size="lg" block>
                Block level button
            </Button> */}
            {data.map(d =>(
                 <Button variant="primary" size="lg" block key={d.itemId}>
                    <Link to={`/profile/${d.itemId}`} className="link">
                        {d.item.name}
                    </Link>
                </Button>
            ))}
            {/* {data.map(d =>(
                <h2 key={d.itemId}>
                    <Link to={`/profile/${d.itemId}`}>
                        {d.item.name}
                    </Link>
                </h2>
            ))} */}
        </div>
    );
}



export default Dashboard;
