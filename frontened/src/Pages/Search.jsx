import React, { useRef, useState } from 'react'
import ProdCard from '../Component/ProdCard'
import axios from 'axios'

const Search = () => {
  const searchRef = useRef()
  const [ product, setProd ] = useState([])
  const [error, setError ] = useState("")
   
  const handleSubmit = async (e) => {
    setError("")
    e.preventDefault()
    let key = searchRef.current.value
    console.log(key)
    try {
        let data = await axios.get(`http://localhost:3000/list/search/${key}`)
        console.log(data.data);
        setProd(data.data)
    } catch (error) {
        setProd([])
        setError("No Data Found")
    }
}

  return (
    <>
     <div className='row p-5'>
        <div className="col-md-4 mx-auto">
            <form method="post"onSubmit={handleSubmit} >
                <div className="row g-0">
                    <div className="col-8">
                        <input ref={searchRef}  className="form-control" type="text" placeholder='Search Product' required />
                    </div>
                    <div className="col-2">
                        <input type='submit' value="Search" className='btn btn-dark mx-2' />
                    </div>
                </div>
            </form>
        </div>
    </div>
     
    {
        error.length > 0 ? (
            <p>{error}</p>
        ) : (
            <div className='row g-2 my-3'>
            {
                product.map( prod => (
                    <div className="col-md-4" key={prod?._id}>
                        <ProdCard prod={prod} />
                    </div>
                ))
            }
            </div>

        )
    }


    </>
  )
}

export default Search