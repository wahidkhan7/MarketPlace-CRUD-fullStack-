
// import { Link } from "react-router-dom"
// import { useAuth } from "../Context/AuthContext"

// const Navbar = () => {

//   const{name,token,logout}=useAuth()

//   function handleLogout(){
//     logout()
//   }

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav me-auto">
//         <li className="nav-item">
//           <Link className="nav-link fw-semibold "  to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link fw-semibold"  to="/search">Search</Link>
//         </li>
//         {
//           token? (
//             <>
//                <li className="nav-item">
//                <Link className="nav-link fw-semibold "  to="/add">Add Product</Link>
//              </li>
//                <li className="nav-item">
//                <Link className="nav-link fw-semibold text-danger" to={"/"} onClick={handleLogout}>Log Out</Link>
//              </li>
//         </>
//           ) : (
//             <>
//               <li className="nav-item">
//               <Link className="nav-link fw-semibold "  to="/signup">Sign up</Link>
//               </li>
//              <li className="nav-item">
//              <Link className="nav-link fw-semibold "  to="/login">Login</Link>
//               </li>
//             </>
//           )
//         }
//       </ul>
//       {token && (
//         <div className="d-flex">
//         <span className="navbar-text fw-bold text-white rounded px-3 py-1" 
//           style={{background: "linear-gradient(to right, #4e54c8, #8f94fb)"}}>
//          Welcome {name}
//           </span>
//         </div>
//       )}
//     </div>
//   </div>
// </nav>
//   )
// }

// export default Navbar

import { Link } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
  const { name, token, logout } = useAuth()
  const [showDropdown, setShowDropdown] = useState(false)

  function handleLogout() {
    logout()
    setShowDropdown(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MarketPlace</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
            {token && (
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add Product</Link>
              </li>
            )}
          </ul>
          
          {token ? (
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button 
                  className="btn btn-link text-decoration-none dropdown-toggle d-flex align-items-center"
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ color: 'white' }}
                >
                  <FaUserCircle size={24} className="me-2" />
                  <span className="d-none d-sm-inline">Hello {name}</span>
                </button>
                <div 
                  className={`dropdown-menu dropdown-menu-end ${showDropdown ? 'show' : ''}`}
                  style={{ right: 0, left: 'auto' }}
                >
                  <Link 
                    className="dropdown-item" 
                    to="/profile"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    className="dropdown-item text-danger d-flex align-items-center"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex">
              <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar