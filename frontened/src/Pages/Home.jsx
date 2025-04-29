// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import ProdCard from '../Component/ProdCard';


// const Home = () => {
//   const[list,setList] = useState([]);
//   async function getProducts() {
//     try {
//       let data = await axios.get("http://localhost:3000/list");
//       console.log(data.data)
      
//       setList(data.data)
//       } catch (error) {
//       console.log(error);
      
      
//     }
    
//   }
//   useEffect(()=>{
//     getProducts()
//   },[])
//   return (
//     <div className="row g-4">
//   {list.map(prod => (
//     <div className="col-sm-6 col-md-4 col-lg-3" key={prod._id}>
//       <ProdCard prod={prod} />
//     </div>
//   ))}
// </div>

//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProdCard from '../Component/ProdCard';

const Home = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getProducts() {
    try {
      setIsLoading(true);
      const { data } = await axios.get("http://localhost:3000/list");
      setList(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Our Products</h1>
        <p className="lead text-muted">Discover our amazing collection of items</p>
      </div>

      {isLoading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">
          {error}
          <button className="btn btn-sm btn-outline-danger ms-3" onClick={getProducts}>
            Retry
          </button>
        </div>
      ) : list.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted">No products available</h4>
        </div>
      ) : (
        <div className="row g-4">
          {list.map(prod => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod._id}>
              <ProdCard prod={prod} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;