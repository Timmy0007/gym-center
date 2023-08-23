import React from 'react'
import "./fitness.css"
import fitnes from '../../assets/fitness.png'
import checklist from '../../assets/checklist.png'

const fitness = () => {
  return (
    <div className='fitn'>
    <img className='fitness-img' src={fitnes} alt='fitness'/>
    <div className='fitness-text'>

    <div className='transform'>Transform your physique with our fitness plan</div>

    <div className='transform2'>
    <p className='increase'>
        <img className='checklist' src={checklist} alt='checklist'/>
        <p className='check'>Increase Muscle and Strength</p>
        </p>
    <p className='be'>
    <img className='checklist' src={checklist} alt='checklist'/>
        <p className='check'>Be Healthier than before</p>
        </p>
    <p className='stamina'>
    <img className='checklist' src={checklist} alt='checklist'/>
        <p className='check'>Increase Stamina</p>
        </p>
    </div>

    <div className='join-btn'>
    <button className='joinn'>Join now</button>
    <div className='contact'>Contact us</div>
    </div>
    </div>
    </div>
  )
}

export default fitness