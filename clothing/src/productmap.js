import React from 'react'
import data from './list'
import Product from './Product'

const Productmap = () => {
  return (
    <div>{
        // eslint-disable-next-line array-callback-return
        data.map((item,index) => {
            return <Product image={item.image} item={item} key={index}/>
        })
    }</div>
  )
}

export default Productmap