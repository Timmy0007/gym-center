import React from 'react'
import Header from './Components/Header/Headerr';
import Section2 from "./Components/Section2/Section";
import Section3 from "./Components/Section3/Section3";
import Fitness from './Components/fitness/fitness';
import Enhance from './Components/Enhance/enhance';
import Packages from './Components/Packages/packages';
import Member from './Components/member/member';
import Subscribe from './Components/Subscribe/subscribe';
import Footer from './Components/footer/footer';

const home = () => {
  return (
    <div className='homepage'>
        <Header/>
        <Section2/>
        <Section3/>
        <Fitness/>
        <Enhance/>
        <Packages/>
        <Member/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default home