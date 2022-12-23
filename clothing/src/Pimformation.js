import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './list';
import './Pimformation.css'


function Pimformationjs() {
  const params = useParams();
  const id = params.id;
  const name = params.name;
  const price = params.price;

  const [img, setimg] = useState({});

  useEffect(() => {
    getimage();
  })
  const getimage = () => {
    const f = data.find((val, index) => {
      return val.id === parseInt(id);
    })
    setimg(f);
  }
  return (
    <div>
      <div className="heading">
        <h2>Product Details</h2>
      </div>
      <div className="detail">
        <div className="imgs">
          <img src={img.image} alt="" srcset="" />
        </div>
        <div className="imfo">
          <h3>{name}</h3>
          <h5>${price}</h5>
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit  , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <h6 className='abtn'>Add To Cart</h6>
        </div>
      </div>

    </div>
  )
}

export default Pimformationjs