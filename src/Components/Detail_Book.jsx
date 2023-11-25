import React, { useContext, useEffect, useState } from 'react'
import "../Assets/CSS/Detail_Book.css"
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Missing from './Missing';
import { AuthContext } from "./useContext/Admin";

const Detail_Book = ({PopularCollections,BiographyCollections,HorrorCollections,RomanceCollections,ScienceFictionsCollections}) => {
    const { auth } = useContext(AuthContext);
    console.log(auth);

    const [productData,setProductData] = useState(null);
    const {collection,id} = useParams();
    let selectedCollection =null;

    if(collection==='PopularCollections')
    {
        selectedCollection = PopularCollections;
    }
    else if(collection==="BiographyCollections")
    {
        selectedCollection = BiographyCollections;
    }
    else if(collection==="HorrorCollections")
    {
        selectedCollection = HorrorCollections;
    }
    else if(collection==="RomanceCollections")
    {
        selectedCollection = RomanceCollections;
    }
    else if(collection==="ScienceFictionCollections")
    {
        selectedCollection = ScienceFictionsCollections;
    }
    
    
    useEffect(() =>{
        if (!selectedCollection || !Array.isArray(selectedCollection)) {
            return;
        }

        for (let i = 0; i < selectedCollection.length; i++) {
            if (selectedCollection[i].id === id) {
                setProductData(selectedCollection[i]);
                break; 
            }
        }
    }, [selectedCollection, id]);
    if(productData===null)
    {
        return(
            <Missing/>
        )
    }
    else
    {
  return (
    
    <>
        <Navbar/>
       
        <div className='detcontainer'>
            <div className='detimage'>
                <img src= {productData.imageurl} alt="" />
            </div>
            <div className='detcontent'>
                <h1 style={{marginTop:"0px"}}>
                    {productData.name}
                </h1>
                <h2>
                    Author:{productData.author}
                </h2>
                <h2>
                    Synopsis
                </h2>
                <p style={{color:"black"}}>
                {productData.description}
                </p>
            </div>
            <div className='detbtn'>
                <h4 className='detbtnChild'>Buy the eBook</h4>
                <h5 className='detbtnChild'>List Price: <span style={{textDecoration: "line-through"}}>{productData.price+30}</span></h5>
                <h5 className='detbtnChild'>Your Price: {productData.price}</h5>
                <button className='detbtnChild' id='buy'>Buy Now</button>
                <button className='detbtnChild' id='cart'>Add to Cart</button>
                {auth.isAuthenticated===true && <button className='detbtnChild' id='buy' style={{backgroundColor:"darkblue",color:"white" }}>Update</button>}
                {auth.isAuthenticated===true && <button className='detbtnChild' id='cart' style={{backgroundColor:"red",color:"white" }}>Delete</button>}
            </div>
        </div>
        <Footer/>
    </>
  )
    }
}

export default Detail_Book