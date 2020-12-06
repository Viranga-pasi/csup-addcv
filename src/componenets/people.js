import React from 'react';

import Card from 'react-bootstrap/Card'
import '../App.css';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
function People(props) {
  
  
  return (
    <div >
      <Card bsPrefix="people" border="light">
            {/* <Card.Img variant="top" src={props.img} /> */}
            <Image src={props.img} roundedCircle style={{width: 175, height: 'auto', margin:5}}/>
            <Card.Body>
                <h6>{props.name}</h6>
                
                
                <button className="button">
                    <Link to={props.link} className="link">
                        View Profile
                    </Link>
                </button>
            </Card.Body>
        </Card>
    </div>
  );
}



export default People;
