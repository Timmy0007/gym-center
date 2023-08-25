import React from 'react'
import "./Section3.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousell from './carousell'; 
import { CarouselData, responsive } from './carouseldata';

const section3 = () => { 

  const product = CarouselData.map((item) => (
    <Carousell
      name={item.name}
      url={item.productimage}
      description={item.description}
    />
  ));


  return (
    <div className='section3'>
    <div className='explore'>Explore Our Program</div>

    <div className='carousel-section'>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      </div>
    </div>
  )
}

export default section3