import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import electronic from './electronic.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAmbulance, faAnchor } from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <div>
      <div className="section">
        <div className="containers">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
              <div className="btn3">
                <Link to="/">Read More</Link>
              </div>
            </div>
            <div className="socials">
              {/* <Link to=""><faAmbulance/></Link>
              <Link to=""><faAnchor/></Link>
              <Link to=""><faAnchor/></Link> */}
            </div>
          </div>
          <div className="image-section">
           <img src={electronic} alt="" srcset="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About