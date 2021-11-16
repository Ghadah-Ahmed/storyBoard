import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const login = React.useRef();

    React.useEffect(() => {
        login.current.parentElement.style.position = 'static'
    }, [])
    return (
        <div ref={login} className="login-box">
            <h2>Login</h2>
            <form>
            <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Username</label>
            </div>
            <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <Link to="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Login
            </Link>
            </form>
      </div>
    )
}
