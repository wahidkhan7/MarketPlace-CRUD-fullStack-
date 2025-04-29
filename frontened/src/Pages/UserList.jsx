import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserList = () => {
    const {name} = useParams()
    const [user,setUser] = useState([]);
    const navigate = useNavigate()
    async function getDetails(){
        try {
            let data = await axios.get(`http://localhost:3000/list/search/${name}`)
            console.log(data.data);
            setUser(data.data)
            
        } catch (error) {
            console.log(error);
            if(error.status === 400){
                alert("Invalid Name");
            } 
            navigate("/")
            
            
        }
        
    }
    useEffect(()=>{
        getDetails()
    },[name])
  return (
    <div className='row g-2'>
        <div className="col-md-6">
        <img src={user.imageName} className='img-fluid w-50' />
        </div>
        <div className="col-md-6">
            <h2>{user.itemName}</h2>
            <p>{user.description}</p>
            <p><span className='fw-semibold'>Start Date: </span>{new Date(user.createdAt).toLocaleDateString()}</p>
            <p><span className='fw-semibold'>End Date: </span>{new Date(user.updatedAt).toLocaleDateString()}</p>
            </div>
    </div>
  )
}

export default UserList