import React,{useState, useEffect} from 'react';

function Dashboard() {
    useEffect(()=>{
        fetchData();
    },[]);

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const details = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items =  await details.json();
        
        
        console.log(items.data);
        setData(items.data);
    }
    
    return (
        <div>
            <h1>Dashboard</h1>


        </div>
    );
}



export default Dashboard;
