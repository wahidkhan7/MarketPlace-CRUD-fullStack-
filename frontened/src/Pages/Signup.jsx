
import React, { useRef, useState } from 'react';
import axios from "axios"

const Signup = () => {
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const sicRef =useRef()

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    setMessage("")
    e.preventDefault();
    const name = nameRef.current.value;
    const mobile = mobileRef.current.value;
    const sic = sicRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    
    try {
  
      let res = await axios.post("http://localhost:3000/users", {name,mobile,sic,email,password})
      if(res.status==201){
        setMessage("Account Created")
         nameRef.current.value="";
         mobileRef.current.value="";
         sicRef.current.value="";
         emailRef.current.value="";
         passwordRef.current.value="";

      }
      
    } catch (error) {
      setMessage("Account Not created.Check the emial and passord and try again")
      console.log(error);
      
      
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="card shadow" style={{ minWidth: '350px', width: '100%', maxWidth: '450px' }}>
          <div className="card-header text-center bg-white">
            <h3 className="mb-0">Create an Account</h3>
            {message && <small className="text-success">{message}</small>}
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input ref={nameRef} type="text" className="form-control mb-3" placeholder="Name" required />
              <input ref={mobileRef} type="text" className="form-control mb-3" placeholder="Mobile" required />
              <input ref={sicRef} type="text" className="form-control mb-3" placeholder="SIC" required />
              <input ref={emailRef} type="email" className="form-control mb-3" placeholder="Email" required />
              <input ref={passwordRef} type="password" className="form-control mb-3" placeholder="Password" required />
              <button type="submit" className="btn btn-dark w-100">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Signup;
