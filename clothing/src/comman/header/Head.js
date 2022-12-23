import React from "react"
import { AiOutlinePhone } from 'react-icons/ai';
import {BsEnvelope} from 'react-icons/bs'
import './Head.css'
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container'>
          <div className='left'>
          <i><AiOutlinePhone/></i>
            <label> +88012 3456 7894</label>
            <i><BsEnvelope/></i>
            <label>NikhilAdhare@gmail.com</label>
          </div>
          <div className='right'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            {/* <span>🏳️‍⚧️</span>
            <label>EN</label>
            <span>🏳️‍⚧️</span>
            <label>USD</label> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head