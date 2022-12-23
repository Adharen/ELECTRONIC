import React from 'react'
import './Slide.css'
import Carousel from 'react-bootstrap/Carousel'
import p1 from './i16.jpg'
import p2 from './i17.jpg'
import p3 from './i11.jpg'
import p4 from './i18.jpg'
import p5 from './i20.jpg'
function Slide() {
  return (
    <section >
        <Carousel style={{ width:"100%",height:"485px",objectFit:"cover"}} >
          <Carousel.Item >
            <img
              className="d-block w-100 "
              style={{height:500 ,width:"100%"}}
              src={p1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              style={{height:500 ,width:"100%"}}
              src={p5}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{height:500,width:"100%"} }
              src={p2}
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:500,width:"100%" }}
              src={p3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              style={{height:500 ,width:"100%"}}
              src={p4}
              alt="Fouth slide"
            />
          </Carousel.Item>
        </Carousel>
   </section>
  )
}

export default Slide