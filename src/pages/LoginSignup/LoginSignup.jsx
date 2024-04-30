/* eslint-disable no-unused-vars */
import React from 'react';
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Enter Username' />
          <input type='email' placeholder='Enter Email Address' />
          <input type='Password' placeholder='Enter Password' />
        </div>
        <button>Submit</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p className='text'>By Continuing, I agree to the terms of use & Privacy Policy.</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignup