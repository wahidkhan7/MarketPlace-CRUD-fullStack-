import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useAuth } from '../Context/AuthContext'

const AddProd = () => {
  const [message,setMessage] = useState("")

  const {token} = useAuth()

  const itemNameRef = useRef()
  const descriptionRef = useRef()
  const conditionRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const startDateRef = useRef()
  const endDateRef = useRef()
  const linkRef = useRef()
  const imageNameRef = useRef()


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
    const imageName = imageNameRef.current.files[0]

    let eventData = new FormData()

        eventData.append('itemName', itemName)
        eventData.append('description', description)
        eventData.append('condition', condition)
        eventData.append('price', price)
        eventData.append('category', category)
        eventData.append('startDate', startDate)
        eventData.append('endDate', endDate)
        eventData.append('link', link)
        eventData.append('imageName', imageName)

     try {
      let res = await axios.post("http://localhost:3000/list", eventData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
      }
      })
      
      if(res.status==201){
        setMessage("Product created")
        itemNameRef.current.value=""
        descriptionRef.current.value=""
        priceRef.current.value=""
        startDateRef.current.value=""
        endDateRef.current.value=""
        linkRef.current.value=""


      }
      
     } catch (error) {
      setMessage("Event not created")
      console.log("catch me eror");
      
      console.log(error);
      

      
     }
  }

  return (
    <div className='row mt-5'>
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h3>Add product</h3>
                <span >{message}</span>
            </div>
            <div className="card-body">
                <form method="post" onSubmit={handleSubmit}>
                    Product Title
                    <input ref={itemNameRef} type='text' className='form-control mb-1' required placeholder='xxxxx' />
                    Product Description
                    <textarea ref={descriptionRef} rows={5} className='form-control mb-1' required></textarea>
                    Condition
                    {/* <input ref={conditionRef} type='text' className='form-control mb-1' placeholder='New, Good ,Poor' required /> */}
                    <select ref={conditionRef} name="Condition" className='form-control mb-1' >
                    <option >--Select--</option>
                      <option >New</option>
                      <option >Good</option>
                      <option >Poor</option>
                    </select>
                    Price
                    <input ref={priceRef} type='text' className='form-control mb-1' required placeholder='xxxxx' />
                    Category
                    {/* <input ref={categoryRef} type='text' className='form-control mb-1' placeholder='Book, Engineering Equipment, Stationery, Electronics, SportsEquipment, Clothing' required /> */}
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
                    Product Image
                    <input ref={imageNameRef} type='file' className='form-control mb-1' required />
                    <input type='submit' value="Add Product" className='btn btn-dark w-100 mt-2' />
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddProd