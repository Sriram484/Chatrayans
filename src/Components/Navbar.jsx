import React, { useState } from 'react'
import "../Assets/CSS/Navbar.css"
import { FaBars } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = ({data}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <>
            <header>
              <div>
               <center><FaBookOpenReader className='logo' /></center> 
                <h2>Chatrayans</h2>
              </div>
              <input type="checkbox" id='menu_check'/>
              <label for="menu_check">
              <FaBars id='menu_bar'/>

              </label>
              <nav className='navbar'>
                <ul >
                    <li>
                        <NavLink to="/home" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/review" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Reviews
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          View Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" style={({isActive})=>{
                          return isActive ? {color:"#089da1"} : {}
                          }} >
                          Log Out
                        </NavLink>
                    </li>
                </ul>
              </nav>
            </header>
    </>

  )
}

export default Navbar