import React from 'react'
import "./member.css"
import edge from '../../assets/edge2.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Datamember from './datamember';
import { Memberdata, responsive } from './memberdata';

const member = () => {

    const product = Memberdata.map((item) => (
        <Datamember
          name={item.man}
          url={item.productimage}
          description={item.description}
        />
      ));

  return (

    <div className='member'>
        <div className='member1'>
        <div className='what'>What Our Member Say About Us</div>
        <img className='edgee' src={edge} alt='edg'/>
        </div>

        <div className='member2'>
        <Carousel responsive={responsive}>
        {product}
      </Carousel>
        </div>
    </div>
  )
}

export default member