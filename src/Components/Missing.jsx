import React from 'react'
import '../Assets/CSS/Missing.css'
import { Link } from 'react-router-dom'
import Cat from '../Assets/Images/Cat.jpeg'
import Navbar from './Navbar'

const Missing = () => {
  return (
    <>
      <Navbar/>
      <div className='MisContainer'>
        <h2 style={{marginTop:"10%"}}>WORK IN PROGRESS!!!</h2>
        <img src={Cat} style={{height:"300px",width:"500px"}}></img>
        <button style={{margin:"20px", backgroundColor:"black",padding:"2px",borderRadius:"10px"}}><Link to="/home" style={{textDecoration:"none",color:"white"}}>GO BACK</Link></button>
      </div>
    </>
  )
}

export default Missing