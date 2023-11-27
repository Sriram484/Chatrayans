import React from 'react'
import { useFirestore } from "../Assets/firebase/useFireStore";

const ViewCartList = ({user,id,name,author,url,price,description}) => {
    const {deleteDocument} = useFirestore(user);
    console.log(user);
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
        <button className="postBtnChild" style={{backgroundColor:"red"}} onClick={()=>{handleClick(id)}}>Delete</button>
      </div>
      </center>
  </div>
  )
            
}

export default ViewCartList