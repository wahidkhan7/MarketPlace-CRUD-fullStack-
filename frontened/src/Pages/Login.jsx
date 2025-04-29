import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../Context/AuthContext'


const Login = () => {
  const {login} = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()
  const [message,setMessage] = useState("")


  async function handleLogin(e){
    e.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value 

    console.log(email,password);
    
    try {
      let res = await axios.post("http://localhost:3000/users/login", {email,password})
      if(res.status===200){
        console.log(res);
        login(res.data)
        

        emailRef.current.value="";
        passwordRef.current.value ="";
        navigate("/")
     }
      
      
    } catch (error) {

      setMessage("Invalid credentials")
      console.log(error);
      
      
    }
  }


  return (
    <div className='row  mt-5'>
    <div className="col-md-6 mx-auto">
        <div className="card">
            <div className="card-header">
                <h3>Login Here</h3>
                <span className='text-danger'>{message}</span>
            </div>
            <div className="card-body">
                <form method="post" onSubmit={handleLogin} >
                    <input ref={emailRef} type='email' className='form-control mb-2' placeholder='Email' required />
                    <input ref={passwordRef} type='password' className='form-control mb-2' placeholder='Password' required />
                    <input type='submit' className='btn btn-dark' value="Login In" />
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Login