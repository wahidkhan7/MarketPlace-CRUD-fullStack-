import React, { useEffect, useState } from "react";
import { FaUser, FaPhone, FaUserEdit,  FaMapMarkerAlt, FaEdit, FaPlus, FaBell,  FaFilter,  FaCreditCard, FaFileInvoice } from "react-icons/fa";
import myImage from "../assets/img.jpg"
import { getUserFromToken } from "../Utils/utilityFunction";
import axios from "axios";
import './UserProfile.css'
const UserProfile = () => {

    let  id = getUserFromToken()
    const[user,setUser] = useState({})
    
async function GetUserInfo() {
    try {
        let data = await axios.get(`http://localhost:3000/users/${id}`)
        console.log(data.data);
        setUser(data.data)
        

        
    } catch (error) {
        console.log("erroororororo");
        
        console.log(error);
    }
}
useEffect(()=>{
    GetUserInfo()
},[id])
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Left Sidebar - User Profile */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0 d-flex align-items-center">
                <FaUser className="me-2" />
                My Profile
              </h5>
            </div>
            <div className="card-body text-center">
              <div className="mb-4">
                <img 
                  src={myImage} 
                  alt="Profile" 
                  className="rounded-circle img-thumbnail mb-3"
                  style={{ width: '150px', height: '150px' }}
                />
                <h3>{user.name}</h3>
                <p className="text-muted">{user.email}</p>
              </div>

              <div className="text-start">
                <div className="d-flex align-items-center mb-3">
                  <FaPhone className="me-3 text-primary" />
                  <span>+91{user.mobile}</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <FaBell className="me-3 text-primary" />
                  <span>SMS alerts activation</span>
                </div>
                <div className="mb-3">
                  <p className="text-muted mb-1">Lent High: 07 Aug 2010, M-R4</p>
                  <p className="text-muted">Windows III plc (Main VOL) (32)</p>
                </div>
              </div>

              <button className="btn btn-primary mt-3 d-flex align-items-center mx-auto">
                <FaUserEdit className="me-2" />
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Accounts and Bills */}
        <div className="col-md-8">
          {/* xPay Accounts Card */}


         {/* Address Section */}

         {/* Address Section with Compact Scroll */}
<div className="card shadow-sm mb-4" style={{ maxHeight: "400px" }}> {/* Set max height instead of fixed height */}
  <div className="card-header bg-primary text-white position-sticky top-0 z-index-1">
    <h5 className="mb-0 d-flex align-items-center">
      <FaMapMarkerAlt className="me-2" />
      My Addresses
    </h5>
  </div>
  <div className="card-body p-0 overflow-hidden"> {/* Hide overflow by default */}
    <div style={{ 
      maxHeight: "350px",
      overflowY: "auto",
      padding: "1rem",
      scrollbarWidth: "thin",
    }}>
      {/* Primary Address */}
      <div className="mb-4 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="text-primary fw-bold">Primary Delivery Address</h6>
          <button className="btn btn-sm btn-outline-primary d-flex align-items-center">
            <FaEdit className="me-1" />
            Edit
          </button>
        </div>
        <div className="border-dotted p-3 rounded">
          <p className="mb-1 fw-semibold">John Doe</p>
          <p className="mb-1">123 Main Street, Apt 4B</p>
          <p className="mb-1">New York, NY 10001</p>
          <p className="mb-0">United States</p>
          <p className="mb-0 mt-2">
            <FaPhone className="me-2" />
            +1 (555) 123-4567
          </p>
        </div>
      </div>

      {/* Secondary Address */}
      <div className="mb-4 position-relative">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="text-secondary fw-bold">Secondary Address</h6>
          <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
            <FaEdit className="me-1" />
            Edit
          </button>
        </div>
        <div className="border-dotted p-3 rounded">
          <p className="mb-1 fw-semibold">John Doe (Work)</p>
          <p className="mb-1">456 Business Ave, Floor 10</p>
          <p className="mb-1">Brooklyn, NY 11201</p>
          <p className="mb-0">United States</p>
          <p className="mb-0 mt-2">
            <FaPhone className="me-2" />
            +1 (555) 987-6543
          </p>
        </div>
      </div>

      {/* Additional addresses to demonstrate scrolling */}
      {[1, 2, 3].map((item) => (
        <div key={item} className="mb-4 position-relative">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="text-muted fw-bold">Additional Address {item}</h6>
            <button className="btn btn-sm btn-outline-secondary d-flex align-items-center">
              <FaEdit className="me-1" />
              Edit
            </button>
          </div>
          <div className="border-dotted p-3 rounded">
            <p className="mb-1 fw-semibold">John Doe (Vacation {item})</p>
            <p className="mb-1">{100 + item} Beachfront Blvd</p>
            <p className="mb-1">Miami, FL 331{item}9</p>
            <p className="mb-0">United States</p>
            <p className="mb-0 mt-2">
              <FaPhone className="me-2" />
              +1 (555) 765-432{item}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="card-footer bg-white border-top">
    <button className="btn btn-primary d-flex align-items-center w-100 justify-content-center">
      <FaPlus className="me-2" />
      Add New Address
    </button>
  </div>
</div>


          {/* Bills Card */}


          <div className="card shadow-sm" style={{ maxHeight: "500px" }}>
  <div className="card-header bg-primary text-white position-sticky top-0 z-index-1">
    <h5 className="mb-0 d-flex align-items-center">
      <FaFileInvoice className="me-2" />
      My Orders
    </h5>
  </div>
  <div className="card-body p-0 overflow-hidden">
    {/* Scrollable orders list */}
    <div style={{ 
      maxHeight: "350px",
      overflowY: "auto",
      padding: "1rem",
      scrollbarWidth: "thin"
    }}>
      <div className="list-group">
        {/* Order Item 1 */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Premium Wireless Headphones</h6>
            <small className="text-muted">Order #ORD-78945</small>
          </div>
          <span className="badge bg-success rounded-pill">Paid</span>
        </div>

        {/* Order Item 2 */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Smart Fitness Watch</h6>
            <small className="text-muted">Order #ORD-78231</small>
          </div>
          <span className="badge bg-danger rounded-pill">Not Paid</span>
        </div>

        {/* Order Item 3 */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Organic Green Tea (Pack of 5)</h6>
            <small className="text-muted">Order #ORD-78112</small>
          </div>
          <span className="badge bg-success rounded-pill">Paid</span>
        </div>

        {/* Order Item 4 */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Leather Wallet with RFID Protection</h6>
            <small className="text-muted">Order #ORD-78005</small>
          </div>
          <span className="badge bg-danger rounded-pill">Not Paid</span>
        </div>

        {/* Order Item 5 */}
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-1">Bluetooth Portable Speaker</h6>
            <small className="text-muted">Order #ORD-77992</small>
          </div>
          <span className="badge bg-success rounded-pill">Paid</span>
        </div>

        {/* Additional demo orders to show scrolling */}
        {[6, 7, 8].map((item) => (
          <div key={item} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">Product {item}</h6>
              <small className="text-muted">Order #ORD-77{900 + item}</small>
            </div>
            <span className={`badge rounded-pill ${item % 2 ? 'bg-success' : 'bg-danger'}`}>
              {item % 2 ? 'Paid' : 'Not Paid'}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Filter section - stays fixed at bottom */}
    <div className="border-top pt-3 px-3 pb-3 bg-white position-sticky bottom-0">
      <h6 className="d-flex align-items-center mb-3">
        <FaFilter className="me-2" />
        Filter by
      </h6>
      <div className="row">
        <div className="col-md-4 col-6">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="orderFilter" 
              id="allOrders" 
              defaultChecked
            />
            <label className="form-check-label" htmlFor="allOrders">
              All Orders
            </label>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="orderFilter" 
              id="paidOrders" 
            />
            <label className="form-check-label" htmlFor="paidOrders">
              Paid
            </label>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="orderFilter" 
              id="unpaidOrders" 
            />
            <label className="form-check-label" htmlFor="unpaidOrders">
              Unpaid
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





       </div>
      </div>
    </div>
  );
};

export default UserProfile;

