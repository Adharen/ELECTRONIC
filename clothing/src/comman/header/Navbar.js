import React, { useState } from "react";
import { NavLink ,Link } from "react-router-dom";
import "./Navbar.css";
import {MdContactPage} from 'react-icons/md'
import {AiOutlineCustomerService} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {FcHome } from 'react-icons/fc'
// import {FaShopify} from 'react-icons/fa'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Navbar">
             <Link to='/'  className="nav-logo"><span >SmartElectronic</span></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <NavLink to="/"  onClick={() => setIsOpen(!isOpen)}>Home <i><FcHome/></i> </NavLink>
                <NavLink to="/About" onClick={() => setIsOpen(!isOpen)}>About <i><FcAbout/></i></NavLink>
                <NavLink to="/Service" onClick={() => setIsOpen(!isOpen)}>Service <i><AiOutlineCustomerService/></i></NavLink>
                <NavLink to="/Contact" onClick={() => setIsOpen(!isOpen)}>Contact <i><MdContactPage/></i></NavLink>
                {/* <NavLink to="/Shopping" onClick={() => setIsOpen(!isOpen)}>Shopping<i><FaShopify/></i></NavLink> */}
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};
export default Navbar;