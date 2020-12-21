import React from 'react';
import { useForm } from "react-hook-form";
import {Button} from 'react-bootstrap'

import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';



function Logout() {

    const dispatch = useDispatch();
    const handleLogOut = (e) =>{
        e.preventDefault();
        dispatch(logout());
        

    }
    
    return (
        <div >

            <Button variant="primary" type="submit" onClick={(e) => handleLogOut(e)}><i className="fas fa-sign-out-alt"></i> Logout</Button>
        </div>
    );
}
export default Logout;
