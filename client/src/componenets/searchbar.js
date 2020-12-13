import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";

import ViewSearch from "./viewSearch"
function SearchBar() {
 
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = useState();
 
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setName(data.name);
    setModalShow(true);
    
  };
  return (
    <div>
        <Form inline className="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl type="text" name="name" ref={register} placeholder="Enter Name" className="mr-sm-2"/>
            <Button inline  variant="success" type="submit" >Search</Button>
            
        </Form>
        {/* <ViewSearch
          show={modalShow}
          onHide={() => setModalShow(false)}
          name={name}
        /> */}
  </div>
  );
}
export default SearchBar;
