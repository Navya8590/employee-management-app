import React, { useEffect, useState } from 'react'
import { deleteDetailsAPI, getDetails } from '../services/allAPI'
import { Link } from 'react-router-dom'
import Edit from '../components/Edit'


const Home = () => {
 const [allDetails,setAllDetails]= useState({})

  useEffect(()=>{
    getAllDetails()
  },[])
  console.log(allDetails);
  
 
  const getAllDetails = async()=>{
    try{
      const result = await getDetails()
      console.log(result);
      
      if(result.status>=200 && result.status<=300){
        setAllDetails(result.data)
        
      }
    }catch(err){
      console.log(err);
      
    }
  }

  const removeDetails = async(id)=>{
    try{
      await deleteDetailsAPI(id)
      getAllDetails()
    }catch(err){
      console.log(err);
      
    }
  }
 
  
  return (
    <div  style={{width:'100%',minHeight:'100vh'}} className='bg-dark '>
       <div className="container d-flex justify-content-between">
        <h1 className='text-light'>EMPLOYEE DETAILS</h1>
        <Link to={'/'}>ADD</Link>
      </div>
     
            <table className='container table my-5 text-light'>
                 <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>status</th>
                        <th>...</th>
                    </tr>
                 </thead>
                 <tbody>
                 {
          allDetails?.length>0?
          allDetails?.map((inputDetails,index)=>(
            <tr key={inputDetails?.userId}>
            <td>{inputDetails?.userId}</td>
            <td>{inputDetails?.userName}</td>
            <td>{inputDetails?.email}</td>
            <td>{inputDetails?.status}</td>
            <td><button onClick={()=>removeDetails(inputDetails?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
          ))
          :
          <div className='fw-bolder text-danger'>YOU DID ADD ANY DETAILS YET</div>
        }
                 </tbody>
            </table>
   </div>
  )
}

export default Home