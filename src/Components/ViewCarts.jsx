import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import "../Assets/CSS/FullList.css"
import { AuthContext } from "./useContext/Admin";
import { useFirestore } from '../Assets/firebase/useFireStore';
import useFetchCollection from "../Assets/firebase/useFetchCollection"
import ViewCartList from './ViewCartList';

const FullList = () => {
  const { auth } = useContext(AuthContext);
  let name = "Sriram";
  if(auth.name!==null)
  {
    name = auth.name;
  }
  const {addDocument,document,error} = useFirestore(name)
  
  console.log(auth.name);
  let cartItems = null;
  cartItems = useFetchCollection(auth.name);
  if(cartItems===null)
  {
    return(
      <div>Loading...</div>
      )
    }
    else{
    let {documents:cart} = cartItems;
  console.log(cartItems);
  console.log(cart);
  if (!cartItems || !cartItems.documents) {
    return <div>Loading...</div>;
  }
  const handleClick = (id) => {

  }
  return (
    <>
      <Navbar />
      <div className="fullcontainer outer">
      {cart.map((item, index) => (
        <ViewCartList
        key={item.id}
        
        user={auth.name}
        id={item.id}
        name={item.name}
        author={item.author}
        url={item.imageurl}
        price={item.price}
        description={item.description}
          />
          ))}
      </div>
    </>
  );
      }
        
};

export default FullList;
