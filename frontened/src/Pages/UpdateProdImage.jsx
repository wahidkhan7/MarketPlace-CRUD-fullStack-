import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const UpdateProdImage = () => {
    let {id} = useParams()
    let {token} = useAuth()
    const imageNameRef = useRef()
    const[message,setMessage]=useState()
    const navigate = useNavigate()


   async function handleSubmit(e){
    e.preventDefault()
    const imageName = imageNameRef.current.files[0]

    const imageData = new FormData()
    imageData.append("imageName",imageName)

    try {
        let res = await axios.put(`http://localhost:3000/list/image/${id}`,imageData,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        if(res.status==200){
            alert("Image Updated")
            navigate("/")

        }
    } catch (error) {
        setMessage("Image Not updated !!")
        console.log(error);
        
    }
   } 
  return (
    <div className='row  mt-5'>
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h3>Update Product Image Here</h3>
                <span className='text-danger'>{message}</span>
            </div>
            <div className="card-body">
                <form method="post" onSubmit={handleSubmit} >
               
                    <input ref={imageNameRef} type='file' className='form-control mb-2' required />
                    <input type='submit' className='btn btn-dark' value="Update" />
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateProdImage