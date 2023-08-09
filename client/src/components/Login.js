import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from "../actions/userActions";
//import { useNavigate } from 'react-router-dom';
import Loading from '../components/loading';
import Error from '../components/Error'

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const loginstate=useSelector(state=>state.loginUserReducer)
    const {loading,error}=loginstate

    const dispatch=useDispatch()
   // let navigate = useNavigate();

    useEffect((e)=>{
      if(localStorage.getItem('currentUser'))
      {
      // navigate('/');
      // e.preventDefault();
      }
    },[])

    function login(e){
       const user={email,password}
        dispatch(loginUser(user))
        e.preventDefault();
    }
return (
    <div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
        <h1 className="text-center m-2" style={{ fontSize: "35px" }}>
          Login
         </h1>
        {loading && <Loading/>}
        {error && <Error error='InvalidnCredentials'/>}
        <div>
          <input 
           type="text"
           placeholder="email" 
           className="form-control"
           required
           value={email}
            onChange={(e)=>{setemail(e.target.value)}}
           />

          <input
            type="password"
            placeholder="password"
            className="form-control"
            required
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
          />
          <button onClick={login} className="btn mt-3 mb-3">Login</button>
          <br/>
            <a style={{color:'black'}} href="/register" className="mt-2">Click Here To Register </a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Login
