import React from 'react'
import "../Assets/CSS/See_More.css"
import { Link } from 'react-router-dom'
const SeeMore = () => {
  return (
    <>
    <div className='box'>
        <h3 > 
            <Link to={'/fullList'}>
                See the Full List
            </Link>
        </h3>

    </div>
    </>
  )
}

export default SeeMore;