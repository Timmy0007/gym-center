import React from 'react'
import "./packages.css"
import { datapack } from './datapack'
import Packdata from './Packdata'

const packages = () => {
    const product = datapack.map((item) => (
        <Packdata
          name={item.name}
          url={item.mark}
          price={item.price}
          per={item.per}
          description={item.description}
          description2={item.description2}
          description3={item.description3}
          description4={item.description4}
          description5={item.description5}
          description6={item.description6}

        />
      ));
  return (
    <div className='packages'>
        <div className='packages1'>
        <div className='pricin'>Pricing</div>
        <div className='listp'>Our List Packages</div>
        <div className='billed'>
            <p className='monthly'>Billed Monthly</p>
            <p className='yearly'> Billed Yearly</p>
        </div>
        </div>

        <div className="packages2">
        {product}
    </div>
    </div>
  )
}

export default packages