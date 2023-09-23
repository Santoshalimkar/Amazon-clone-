import React, { useState,useEffect } from "react";
import "./sign.css";
import logo from "./Asset/Newlogo.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useNavigate} from 'react-router-dom';
import { useStatevalue } from "./StateProvider";



const Signin = () => {
  const history=useNavigate()

  const [{ user }, dispatch] = useStatevalue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    loginUser()
    
  }, [user])

  async function loginUser(e) {
    e.preventDefault();

    const response = await fetch("https://amazon-clone-jd0j.onrender.com/api/login", {

      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    var data = await response.json();
    console.log(data.user.name) 

      if(data.user){
  
        dispatch({
          type:'SET_USER',
          user:data.user.name
        })  
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    


    
    

    if (data.user) {
      localStorage.setItem("token", data.user);
      history('/')
    } else {
      toast.error('Login failed Try Again !', {
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
      <form onSubmit={loginUser}>
        <div className="form-container">
          <h5 className="text-center">Sign in</h5>
          <div className="input-box">
            <h6>Email</h6>
            <input
              className="input2"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h6>Password</h6>
            <input
              className="input2"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button">Sign In</button>
          <h7 className="text-center">New to Amazon?</h7>
          <button className="button2" type="submit">
            <Link to="/Register">Create New Account</Link>
          </button>
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
      </form>
    </div>
  );
};

export default Signin;
