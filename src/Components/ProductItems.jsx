import React from 'react'
import "../Assets/CSS/Home_Body.css"

const ProductItems = (props) => {
    return (
        <div className="card">
            <div className='container'>
          <img className="product--image" src={props.url} alt="product image" />
          </div>
          <h5>{props.name}</h5>
          <p className="price">{props.price}</p>
          <p style={{color:"black"}}>Author:{props.author}</p>
          <p style={{color:"black"}}>
              {(props.description).length<=60 ? 
                props.description 
                :`${(props.description).slice(0,60)}...`}
          </p>
          <div className="btn">
            <button id="cart">Add to Cart</button>
            <button id="buy">Buy Now</button>
        </div>
        </div>
      );
}

export default ProductItems