import React from 'react'
import "./footer.css"
import logo from '../../assets/Logo.png'
import socimg from '../../assets/socimg.png'
import footerlogo from '../../assets/footerlogo.png'

const footer = () => {
  return (
    <div className='footer'>

        <div className='foooter'>
        <div className='footer1'>
            <div className='gymlogo'>
        <img className='logoo' src={logo} alt='logo'/>
        <div className='footergym'>Gym center</div>
        </div>
        <div className='highlight'>Highlight benefits of each exercise, both physical and mental</div>
    </div>

        <div className='footer2'>
        <p className='sitee'>Sitemap</p>
        <p className='foo'>About us</p>
        <p className='foo'>Promo</p>
        <p className='foo'>News and Blogs</p>
        <p className='foo'>Help center</p>

        </div>

        <div className='footer3'>
        <p className='support'>Support</p>
        <p className='foo'>FAQ</p>
        <p className='foo'>Support center</p>

        </div>

        <div className='footer4'>
        <p className='social'>Social media</p>
        <img src={socimg} alt='soc media'/>
        </div>

    </div>

    <div className='footer-bottom'>
        <hr id='hr1' className='hr'/>
        </div>

    <div className='footerend'>

        <img id='fl' src={footerlogo} alt=''/>
        <p id='fit' className='fen'>2023 fitness center</p>
        <p id='term' className='fen'>Term of Use</p>
        <p id='priva' className='fen'> Privacy policy</p>

    </div>

    </div>
  )
}

export default footer