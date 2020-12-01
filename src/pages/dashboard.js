import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
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
        <div>
            <h1>Dashboard</h1>
           
            {data.map(d =>(
                <h2 key={d.itemId}>
                    <Link to={`/profile/${d.itemId}`}>
                        {d.item.name}
                    </Link>
                </h2>
            ))}
        </div>
    );
}



export default Dashboard;
