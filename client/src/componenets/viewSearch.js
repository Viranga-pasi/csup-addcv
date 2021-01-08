import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { fetchData } from "../api/api";

function ViewSearch(props) {
    const [data, setData] = useState([]);
    const [name, setName] = useState();
    const [result, setResult] = useState([]);
    useEffect(async () => {
      const fetchedData = await fetchData();
      setData(fetchedData.data);
      
    },[]);
    
    let i = null;
    useEffect(() => {
        setName(props.name);
        for(i=0; i<userDetails.name.length; i++){
            const currentName = userDetails.name[i].split(' ');
            let firstName = currentName[0];
            let lastName = currentName[1];
            if(name === currentName[1]){
                
                setResult(data[i]);
                // console.log("get "+ name+ " "+ i); 
            }
            else if(name === currentName[0]){
                
                setResult(data[i]);
                // console.log("get "+ name+ " "+ i ); 
            }
            else if(name === userDetails.name[i]){
                
                setResult(data[i]);
                // console.log("get "+ name+ " "+ i); 
            }
            else{
                // console.log("search not found");
            }
            
        }
      });
    // console.log(typeof name);
    const userDetails = {
        name: data.map((d) => d.item.name),  
    };
    const userId = {
        itemId: data.map((d) => d.itemId),
    
    };
    // console.log("search "+ name); 
   

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Search result for "{props.name}"
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}



export default ViewSearch;
