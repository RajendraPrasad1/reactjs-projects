import React from 'react'
import './Login.css'

function Login() {
    const loginToApp = () => {}

    const register = () => {}
  return (
    <div className='login'>
      <img src="https://www.freepnglogos.com/uploads/linkedin-png-logo-23.png"  alt="" />
    
        <form>
            <input  placeholder="Full name" type="text" />
            <input  placeholder="profile pic URL" type="text" />
            <input  placeholder="Email" type="email" />
            <input  placeholder="Password" type="password" />
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>
            Not a member?
            <span className='login_register' onClick={register} >Register Now</span>
            
        </p>
    
    </div> 
  )
}

export default Login
