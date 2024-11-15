import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { saveDetails } from '../services/allAPI';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




const Landing = () => {
  const[employeeDetails,setEmployeeDetails]= useState({
    userId:"",userName:"",email:"",status:""
  })
  console.log(employeeDetails);
  

  const handleEmployeeDetails = async () => {
    const { userId,  userName, email, status } = employeeDetails;
    if (userId && userName && email && status) {
        try {
            const result = await saveDetails(employeeDetails)
            if (result.status >= 200 && result.status < 300) {
                alert("Added Successfully");
                handleClose();
            } else {
                console.log(result);
            }
        } catch (err) {
           console.log(err);
        }
    } else {
        alert("Please fill the form completely");
    }
}

  return (
    < div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      
   <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>User Id</Form.Label>
          <Form.Control onChange={e=>setEmployeeDetails({...employeeDetails,userId:e.target.value})} type="text" placeholder="User Id" />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control onChange={e=>setEmployeeDetails({...employeeDetails,userName:e.target.value})} type="text" placeholder="User Name" />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e=>setEmployeeDetails({...employeeDetails,email:e.target.value})} type="email" placeholder="Email" />
         </Form.Group>
         <FloatingLabel className='mt-2' controlId="floatingStatus" label="Status">
                            <Form.Control 
                                as="select" 
                                value={employeeDetails.status} 
                                onChange={e => setEmployeeDetails({ ...employeeDetails, status: e.target.value })}
                            >
                                <option value=""></option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Control>
                        </FloatingLabel>

       <Button onClick={handleEmployeeDetails} variant="primary" type="submit">
          ADD
        </Button>
        <Link className='ms-5' to={'/home'}>WATCH ADDED DEATAILS</Link>

      </Form>


   </div>
  
   
</div>
  )
}

export default Landing