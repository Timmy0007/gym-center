import React from 'react'
import Header from "./Components/Header/Header";
import Section2 from "./Components/Section2/Section";
import Section3 from "./Components/Section3/Section3";
import Fitness from './Components/fitness/fitness';

const home = () => {
  return (
    <div className='homepage'>
        <Header/>
        <Section2/>
        <Section3/>
        <Fitness/>

    </div>
  )
}

export default home