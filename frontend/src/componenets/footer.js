import React from 'react';
import {Navbar} from 'react-bootstrap'


function Footer() {
  
  function getYear() {
    return new Date().getFullYear();
  }
  
  return (
    <div>

        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
           
                
        <Navbar.Text>
          CSUP WEB @{getYear()}
        </Navbar.Text>
            
            
        </Navbar>
        
  </div>
  );
}
export default Footer;
