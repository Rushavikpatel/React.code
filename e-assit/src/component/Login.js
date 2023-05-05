import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  var navigate = useNavigate()

  const submit = (data) => {
    axios
      .post("http://localhost:4000/user/user/login", data)
      .then((res) => {
        if (res.data.data) {
          console.log("user found...");
          toast.success('🦄 User found!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          // console.log(res.data.data[0].role.name);
          console.log(res.data.data[0]?._id)
          localStorage.setItem("user", res.data.data[0]?._id)
          console.log(res.data.data[0]?.role.name)
          if (res.data.data?.role.name === "user") {
             
        }
        navigate('/AddSchedule')
      }    
      })
      .catch((err) => {
        toast.success("🦄 User login Failed!", {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark",
           });
        // console.log("user not found....");
        // alert("user not found.....");
      });
  };

  var style1 = {     width: "200%" , marginLeft:" 100%",marginTop:"25%"}

  var style2 = { width: "100%" };  
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     
     

<div class="card"style={style1}>
            <div class="card-body"style={style2}>

              <div class="app-brand justify-content-center"style={{textAlign:"center",lineHeight: "2",}}>
              
                  <span class="app-brand-text demo text-body fw-bolder min-weight:5">Login</span>
                
              </div>

              <form id="formAuthentication" class="mb-3" onSubmit={handleSubmit(submit)} method="POST">
                <div class="mb-3"style={{}}>
                  <label for="email" class="form-label">Email or Username:</label>
                  <input type="text" class="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus=""{...register("email")} required/>
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">Password:</label>
                    {/* <a href="auth-forgot-password-basic.html">
                      <small><Link to="/ForgotPassword">Forgot Password?</Link></small>
                    </a> */}
                  </div>
                  <div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control" name="password" placeholder="············" aria-describedby="password"{...register("password")} required/>
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember-me"/>
                    <label class="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p class="text-center">
                <span>New on our platform?</span>
                <a href="auth-register-basic.html">
                  <span><Link to="/registration">Create an account</Link></span>
                </a>
              </p>
            </div>
          </div>
          
          </div>
  )
}
