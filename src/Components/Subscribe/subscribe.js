import React from 'react'
import "./subscribe.css"

const subscribe = () => {
  return (

    <div className='subscribe'>
        <div className='subscribee'>
        <div className='subs'>Subscribe our fitness tips</div>
        <div className='clearly'>Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.</div>
        <div className='subss'>
        <input id='sub-email' type="email" name="email" placeholder="Enter your email address" required/>
        <button className='subs-btn'> Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default subscribe