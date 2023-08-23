import React from 'react'
import "./Header.css"
import logo from "../../assets/Logo.png"

const header = () => {
  return (
    <div className='header'>
          <img className='logo' src={logo} alt='headericon' />

        <div className='hppc'>
          <p className='home'>Home</p>
          <p className='program'>Program</p>
          <p className='pricing'>Pricing</p>
          <p className='community'>Community</p>
        </div>
        
        <div className='header-buttons'>
          <button className='Login'> Login</button>
          <button className='register'> Register</button>
        </div>

        </div> 
  )
}

export default header