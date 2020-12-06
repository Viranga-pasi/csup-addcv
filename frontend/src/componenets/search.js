import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";


function SearchBar() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {console.log(data)};
 
  return (
    <div>
        <Form inline className="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl type="text" name="name" ref={register} placeholder="Enter Name" className="mr-sm-2"/>
            <Button inline  variant="success" type="submit" >Search</Button>
        </Form>

  </div>
  );
}
export default SearchBar;
