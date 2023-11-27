import React from "react";
import { useFirestore } from "../Assets/firebase/useFireStore";
import "../Assets/CSS/FullList.css";
import { Link } from "react-router-dom";


export default function Post({id,name,author,url,price,description,collection}) {
  const {deleteDocument} = useFirestore(collection);
  const handleClick = (id) => {
    deleteDocument(id);
  }
  
  return (
    <div className="postCard postContainer">
      <div>
        <img src={url} alt="" style={{margin:"10px",width:"5rem",height:"10rem"}}/>
      </div>
        <div className="postContent">
            <center>
                <h3 className="postCard-header" style= {{color:"#6C5F5B"}}>{name}</h3>
            </center>
            <div className="postCard-body">
                <p  className="postCard-text" style= {{color:"black"}}>
                        {(description).length<=550 ? 
                            description 
                            :`${(description).slice(0,550)}...`}
                </p>
            </div>
        </div>
        <center>
        <div className="postCard postBtn">
          <Link to={`/update/${collection}/${id}`}>
            <button className="postBtnChild" style={{backgroundColor:"darkblue"}}>Update</button>
          </Link>
          <button className="postBtnChild" style={{backgroundColor:"red"}} onClick={()=>{handleClick(id)}}>Delete</button>
        </div>
        </center>
    </div>
  );
}