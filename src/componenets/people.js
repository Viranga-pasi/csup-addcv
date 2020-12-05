import React from 'react';

import Card from 'react-bootstrap/Card'
import '../App.css';
import {Link} from 'react-router-dom';

function People(props) {
  
  
  return (
    <div >
      <Card bsPrefix="people" border="light">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                
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
