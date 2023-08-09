import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import {registerUser} from "../actions/userActions"
import loading from './loading';
import Success from '../components/Success';
import Loading from "../components/loading";
import Error from "../components/Error";

const Registration = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
const dispatch=useDispatch()

function register(){
 if(password!=cpassword)
 {
    alert("Passwords not matched")
 }
 else{
    const user={
        name,
        email,
        password
    }
    console.log(user)
    dispatch(registerUser(user))
 }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          
          {loading && (<Loading/>)}
          {success && (<Success success='User Register Successfully'/>)}
          {error && (<Error error='Email Already Registed'/>)}

          
          <h1 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h1>
          <div>
            <input 
             type="text"
             placeholder="name"
             className="form-control" 
             required
             value={name}
             onChange={(e)=>{setname(e.target.value)}}
             />
             
            <input 
             type="text"
             placeholder="email" 
             className="form-control"
             required
             value={email}
              onChange={(e)=>{setemail(e.target.value)}}
             />

            <input
              type="text"
              placeholder="password"
              className="form-control"
              required
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              required
              value={cpassword}
              onChange={(e)=>{setcpassword(e.target.value)}}
            />
            <button onClick={register} className="btn mt-3 mb-3">Regiter</button>
            <br/>
            <a style={{color:'black'}} href="/login" className="mt-2">Click Here To Login </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
