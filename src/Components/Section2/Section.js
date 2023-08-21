import React from 'react'
import "./Section.css"
import Demo from '../../assets/Demo.png'
import manwoman from '../../assets/manwoman.png'
import edge from '../../assets/edge-img.png'


const Section = () => {
  return (
    <div className='section2'>
        <div className='section2a'>
        <div className='helps'>Helps for your ideal body fitness</div>
        <div className='motiv'>Motivate users with benefits and positive reinforcement and offer modification and progress tracking</div>
        <div className='training'>
        <button className='start-button'>Start Training</button>
        <div className='demo'>
          <img className='demo-img' src={Demo} alt='play-button'/>
          <div className='watch'>Watch Demo</div>
        </div>
        </div>
            

        </div>

        <div className='section2b'>
          <img className='man' src={manwoman} alt='man&woman'/>
          <img className='edge-img' src={edge} alt='edge-img'/>
        </div>
        </div>
  )
}

export default Section