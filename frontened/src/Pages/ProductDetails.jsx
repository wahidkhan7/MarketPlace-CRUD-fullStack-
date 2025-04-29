// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { useParams, useNavigate, Link } from 'react-router-dom'
// import { getUserFromToken } from '../Utils/utilityFunction'
// import { useAuth } from '../Context/AuthContext'

// const ProductDetails = () => {
//     const {token} = useAuth()
//     const { id } = useParams()
//     const navigate = useNavigate();
//     const [ prod, setProd ] = useState({})


//     let isOwner = prod?.owner?._id==getUserFromToken()



//     const getProdDetails = async() => {
//         try{
//             let data = await axios.get(`http://localhost:3000/list/${id}`)
//             console.log(data.data);
//             setProd(data.data)
//         } catch(error){
//             console.log(error);
//             if(error.status === 400){
//                 alert("Invalid Id");
//             } 
//             navigate("/")
//         }
        
//     }
//     useEffect(()=>{
//         getProdDetails();
//     }, [id])

    
//  async function handleDelete(){
//     let respond = confirm("Are you sure ?")
//     if(respond){
//     try {
//         const deleteId = prod._id
//         let res = await axios.delete(`http://localhost:3000/list/${deleteId}`,{
//             headers:{
//                 "Authorization":`Bearer ${token}`
//             }
//         })

//         if(res.status==200){
//             navigate("/")
//         }

//     } catch (error) {
//         console.log("catch me error");
        
//         console.log(error);
        
        
//     }
// }
//  }




//   return (
//     <div className='row g-2'>
//         <div className="col-md-6">
//         <img src={prod.imageName} className='img-fluid w-50' />
//         </div>
//         <div className="col-md-6">
//             <h2 className='fw-bold' >{prod.itemName}</h2>
//             <h4 >Price -${prod.price}</h4>
//             <p className='fw-semibold' >Description - {prod.description}</p>
//             <p><span className='fw-semibold'>Sales Start Date: </span>{new Date(prod.createdAt).toLocaleDateString()}</p>
//             <p><span className='fw-semibold'>Sales End Date: </span>{new Date(prod.updatedAt).toLocaleDateString()}</p>
//             <div className="card">
//                 <div className="card-body">
//                     <p className='card-title lead fw-bold'>Contact Person</p>
//                    <Link to={`/search/${prod?.owner?.name}`} > <span className='d-block fw-semibold'>{prod?.owner?.name}</span></Link>
//                     <span className='d-block'>{prod?.owner?.mobile}</span>
//                 </div>
//                 {
//                     isOwner && <div className='card-footer'>
//                     <Link to={`/update/${prod._id}`}>    <button className='btn btn-info me-2'>Update</button></Link>
//                         <button onClick={handleDelete} className='btn btn-danger' >Delete</button>

//                     </div>
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ProductDetails



import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getUserFromToken } from '../Utils/utilityFunction'
import { useAuth } from '../Context/AuthContext'

const ProductDetails = () => {
    const {token} = useAuth()
    const { id } = useParams()
    const navigate = useNavigate();
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true)

    let isOwner = prod?.owner?._id == getUserFromToken()

    const getProdDetails = async() => {
        try {
            setLoading(true)
            let { data } = await axios.get(`http://localhost:3000/list/${id}`)
            setProd(data)
        } catch(error) {
            console.log(error)
            if(error.response?.status === 400) {
                alert("Invalid Id")
            } 
            navigate("/")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProdDetails()
    }, [id])

    async function handleDelete() {
        let respond = confirm("Are you sure you want to delete this item?")
        if(respond) {
            try {
                const deleteId = prod._id
                let res = await axios.delete(`http://localhost:3000/list/${deleteId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })

                if(res.status == 200) {
                    navigate("/")
                }
            } catch (error) {
                console.error("Delete error:", error)
                alert("Failed to delete item. Please try again.")
            }
        }
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* Image Section */}
                <div className="col-lg-6">
                    <div className="border rounded-3 p-3 d-flex justify-content-center bg-light">
                        <img 
                            src={prod.imageName} 
                            className="img-fluid rounded-3" 
                            style={{ 
                                maxHeight: '500px', 
                                objectFit: 'contain' 
                            }} 
                            alt={prod.itemName} 
                        />
                    </div>
                </div>
                
                {/* Details Section */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h1 className="card-title fw-bold mb-3">{prod.itemName}</h1>
                            
                            <div className="d-flex align-items-center mb-4">
                                <span className="fs-3 text-primary fw-bold">${prod.price}</span>
                                {isOwner && (
                                    <span className="badge bg-warning text-dark ms-3">Your Item</span>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <h5 className="fw-semibold mb-2">Description</h5>
                                <p className="card-text text-muted">{prod.description}</p>
                            </div>
                            
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h5 className="fw-semibold mb-2">Sales Start Date</h5>
                                    <p>{new Date(prod.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5 className="fw-semibold mb-2">Sales End Date</h5>
                                    <p>{new Date(prod.updatedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                            
                            {/* Seller Info Card */}
                            <div className="card border-primary mb-4">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="card-title mb-0">Contact Seller</h5>
                                </div>
                                <div className="card-body">
                                    <Link 
                                        to={`/search/${prod?.owner?.name}`} 
                                        className="text-decoration-none"
                                    >
                                        <h6 className="card-subtitle mb-2 fw-bold text-primary">
                                            {prod?.owner?.name}
                                        </h6>
                                    </Link>
                                    <p className="card-text">
                                        <i className="bi bi-telephone me-2"></i>
                                        {prod?.owner?.mobile}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Owner Actions */}
                            {isOwner && (
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Link 
                                        to={`/update/${prod._id}`} 
                                        className="btn btn-primary me-md-2 px-4"
                                    >
                                        <i className="bi bi-pencil-square me-2"></i>
                                        Update
                                    </Link>
                                    <button 
                                        onClick={handleDelete} 
                                        className="btn btn-outline-danger px-4"
                                    >
                                        <i className="bi bi-trash me-2"></i>
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails