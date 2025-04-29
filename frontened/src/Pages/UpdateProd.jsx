import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatDate } from '../Utils/utilityFunction'

const UpdateProd = () => {
  const [message,setMessage] = useState("")
  let {id} = useParams()
  const[prod,setProd] = useState({})

  const navigate = useNavigate()

  const {token} = useAuth()

  const itemNameRef = useRef()
  const descriptionRef = useRef()
  const conditionRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const startDateRef = useRef()
  const endDateRef = useRef()
  const linkRef = useRef()
 


   async function getProductDetails(){
    try {
      
      let data = await axios.get(`http://localhost:3000/list/${id}`)
      console.log(data.data);
      setProd(data.data);
      let e  = data.data
   
      itemNameRef.current.value = e.itemName;
      descriptionRef.current.value = e.description;
      conditionRef.current.value = e.condition;
      priceRef.current.value = e.price;
      categoryRef.current.value= e.category;
      startDateRef.current.value = formatDate(e.createdAt);
      endDateRef.current.value = formatDate(e.updatedAt);
      linkRef.current.value = e.link? e.link:"";
    } 
    catch (error) {
      console.log(error);
      if(error.status ==400){
        setMessage("Error fetching product details. Please try again.");
        alert("Invalid  ID")
      }
      
      
    }
}
useEffect(()=>{
  getProductDetails()
},[id])
   

 async function handleSubmit(e){
    e.preventDefault()
     
    const itemName = itemNameRef.current.value
    const description = descriptionRef.current.value
    const condition = conditionRef.current.value
    const category = categoryRef.current.value
    const price = priceRef.current.value
    const startDate = startDateRef.current.value
    const endDate = endDateRef.current.value
    const link = linkRef.current.value

    let eventData= {itemName,description,condition,category,price,startDate,endDate,link}

     try {
      let res = await axios.put(`http://localhost:3000/list/${id}`, eventData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          
      }
      })
      
      if(res.status==200){
        // setMessage("Product updated")
        alert("product updated")
        navigate("/")
}
      
     } catch (error) {
      setMessage("Product not updated!!")
      // console.log("catch me eror");
      
      console.log(error);
      

      
     }
  }

  return (
    <div className='row mt-5'>
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h3>Update product</h3>
                <span className='text-danger'>{message}</span>
            </div>
            <div className="card-body">
                <form method="post" onSubmit={handleSubmit}>
                    Product Title
                    <input ref={itemNameRef} type='text' className='form-control mb-1' required placeholder='xxxxx' />
                    Product Description
                    <textarea ref={descriptionRef} rows={5} className='form-control mb-1' required></textarea>
                    Condition
                    <select ref={conditionRef} name="Condition" className='form-control mb-1' >
                    <option >--Select--</option>
                      <option >New</option>
                      <option >Good</option>
                      <option >Poor</option>
                    </select>
                    Price
                    <input ref={priceRef} type='text' className='form-control mb-1' required placeholder='xxxxx' />
                    Category
                    <select ref={categoryRef} name="Condition" className='form-control mb-1' >
                    <option >--Select--</option>
                      <option>Book</option>
                      <option >Engineering Equipment</option>
                      <option >Stationery</option>
                      <option >Electronics</option>
                      <option >SportsEquipment</option>
                      <option >Clothing</option>
                    </select>
                    Sales Start Date
                    <input ref={startDateRef} type='date' className='form-control mb-1' required />
                    Sales End Date
                    <input ref={endDateRef} type='date' className='form-control mb-1' required />
                    Link(Optional)
                    <input ref={linkRef} type='text' className='form-control mb-1'  />
                   
                    
                    <input type='submit' value="Update Product" className='btn btn-dark w-100 mt-2' />
                </form>
                <Link to={`/image/${prod._id}`}>    <button className='btn btn-dark w-25 mt-2'>Update Product Image</button></Link>
                  
            </div>
        </div>
    </div>
</div>
  )
}

export default UpdateProd