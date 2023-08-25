import React from 'react'
import "./member.css"
import edge from '../../assets/edge2.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const member = () => {
  return (
    <div className='member'>
        <div className='member1'>
        <div className='what'>What Our Member Say About Us</div>
        <img className='edgee' src={edge} alt='edg'/>
        </div>

        <div className='member2'>
        <img src={star} alt='star'/>
        <div className='memtex'>“ Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestion about what food and nutrition that you can eat”</div>
       <div className='facejon'>
        <img src={face} alt='face'/>
        <div className='face2'>
        <p className='jon'> Jonathan Edward</p>
        <p className='work'>Office Worker</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default member