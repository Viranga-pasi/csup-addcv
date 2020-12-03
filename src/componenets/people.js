import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import '../App.css';
import {Link} from 'react-router-dom';

function People(props) {
  
  
  return (
    <div >
      <Card style={{ width: '15rem' }} className="people">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {/* <Card.Text>
                    {props.id}
                </Card.Text> */}
                {/* <Button variant="primary" size="lg" block size="sm" className="button">
                    <Link to={props.link} className="link">
                        View Profile
                    </Link>
                </Button> */}
                <button className="button">
                    <Link to={props.link} className="link" className="link">
                        View Profile
                    </Link>
                </button>
            </Card.Body>
        </Card>
    </div>
  );
}



export default People;
