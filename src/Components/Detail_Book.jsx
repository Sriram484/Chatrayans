import React, { useContext, useEffect, useState } from 'react'
import "../Assets/CSS/Detail_Book.css"
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Missing from './Missing';
import { AuthContext } from "./useContext/Admin";
import { useFirestore } from '../Assets/firebase/useFireStore';

const Detail_Book = ({PopularCollections,BiographyCollections,HorrorCollections,RomanceCollections,ScienceFictionsCollections}) => {
    const { auth } = useContext(AuthContext);
    const {addDocument,document,error} = useFirestore(auth.name)
    console.log(auth.name);
    // console.log(auth);

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
        const handleClick=()=>{
            addDocument(productData);
            alert("Book is Successfully added to cart")
        }
  return (
    
    <>
        <Navbar/>
       
        <div className='detcontainer'>
            <div className='detimage'>
                <img src= {productData.imageurl} alt="" />
            </div>
            <div className='detComponents'>
                {/* <div className='detcontent'> */}
                    <h1 style={{marginTop:"0px"}}>
                        {productData.name}
                    </h1>
                    <h2>
                        Author: {productData.author}
                    </h2>
                    <h2>
                        Synopsis:
                    </h2>
                    <p style={{color:"black"}}>
                        {productData.description}
                    </p>
                {/* </div> */}
                <div className='detbtn'>
                    <div className='detprice'>
                        <h4 className='detbtnChild priceChild'>List Price: <span style={{textDecoration: "line-through"}}>{productData.price+30}</span></h4>
                        <h4 className='detbtnChild priceChild'>Your Price: {productData.price}</h4>
                    </div>
                    <div className='button'>
                        <button className='detbtnChild' id='buy'>Buy Now</button>
                        <button className='detbtnChild' id='cart' onClick={()=>handleClick()}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
    }
}

export default Detail_Book