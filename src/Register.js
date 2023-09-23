import React, { useState } from 'react';
import "./sign.css";
import logo from "./Asset/Newlogo.png";
import {  useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const history=useNavigate()

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


 async function registerUser(e){
  e.preventDefault()

  const response= await fetch('https://amazon-clone-jd0j.onrender.com/api/register',{
    method:"POST",
    headers:{
      'content-type':'application/json',
    },

    body:JSON.stringify({
      name,
      email,
      password,
    })
  });

  const data =await response.json()
  if (data.status==='ok'){
    toast.success("Register Successful!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }); 
  }else{
    toast.error(" Something  Went Wrong !Try Again", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

}



  return (
    <div className="sign-container">
      <div className="signlogo">
        <img className="logo2" src={logo} alt="" />
      </div>
      <form onSubmit={registerUser}>
      <div className="form-container">
        <h5 className="text-center">Sign up</h5>
        <div className="input-box">
          <h6>Name</h6>
          <input className="input2" type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
          <h6>Email</h6>
          <input className="input2" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <h6>Password</h6>
          <input className="input2" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button className="button" type='submit'>Register</button>
      </div>
      </form>
      <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
    </div>
  );
};

export default Register;