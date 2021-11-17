import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function SignUp() {
    const SinUpDiv = useRef();
    let navigate = useNavigate();
    const [wrong, setWrong] = useState(true)
    const [user, setUser] = useState({userName: ' ' ,email: ' ', password: ' '})



    useEffect(() => {
        SinUpDiv.current.parentElement.style.position = 'static'
    }, [])



    const sinup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/users', {email: `${user.email}`, password: `${user.password}`, name: `${user.userName}`})
        .then((res) => {          
            console.log(res.data)
            // res.data? navigate("/login") : setWrong(false)
        })
    }
    return (
        <div className='login_div'>
        <div ref={SinUpDiv} className="login-box">
            <h2>signUp</h2>
            <form>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, userName: e.target.value})} type="text" name="" required=""/>
                <label>userName</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, email: e.target.value})} type="text" name="" required=""/>
                <label>Email</label>
            </div>
            <div className="user-box">
                <input onChange={(e)=> setUser({...user, password: e.target.value})} type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <p className={wrong? 'none' : 'error'}>*All data is required.</p>
            <a href='#' onClick={(e) => sinup(e)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                SinUp
            </a>
            </form>
      </div>
      </div>
    )
}