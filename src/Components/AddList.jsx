import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useFirestore } from "../Assets/firebase/useFireStore";
import Navbar from './Navbar';
import "../Assets/CSS/AddList.css"

import { useNavigate } from 'react-router-dom';                          


const AddList = () => {
    const navigate = useNavigate();
    const [addObj, setaddObj] = useState({
        name: "",
        author: "",
        price: "",
        description: "",
        imageurl:"",
        ratings: "",
        numberOfBuys: "",
        type:"",
      });
      const[collection,setCollection] = useState("PopularCollections");
      const {addDocument,document,error} = useFirestore(collection);
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setaddObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleDropdownChange = (option) => {
        setCollection(option);
        console.log(collection);
        setaddObj(prevState => ({
            ...prevState,
            type: option
        }));
      };
      const handleSubmit = (e) => {
        console.log(collection);
        e.preventDefault();
        addDocument(addObj);
        setaddObj({
            name: '',
            author: '',
            price: '',
            description: '',
            imageurl: '',
            ratings: '',
            numberOfBuys: '',
        });
        
        navigate('/fullList');
      }
  return (
    <>
    <Navbar/>
    <div className='addContent'>
        <form style={{maxWidth:"700px"}} onSubmit={(e)=>handleSubmit(e)} >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" style={{color:"black"}}>Collection</label>
                <Dropdown  onSelect={handleDropdownChange}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{alignItems:"center",justifyContent:"center"}}>
                    Popular Collections
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                    <Dropdown.Item eventKey="BiographyCollections">Biography Collections</Dropdown.Item>
                    <Dropdown.Item eventKey="HorrorCollections">Horror Collections</Dropdown.Item>
                    <Dropdown.Item eventKey="RomanceCollections">Romance Collections</Dropdown.Item>
                    <Dropdown.Item eventKey="ScienceFictionsCollections">Science Fictions Collections</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
          </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" style={{color:"black"}}>Name</label>
            <input type="text" placeholder="Name"  name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Author</label>
            <input type="text"  placeholder="Author" name='author' class="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Price</label>
            <input type="number"  placeholder="Price" name='price' class="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Description</label>
            <textarea class="form-control" placeholder="Description" name='description' id="floatingTextarea2" style={{height: "200px", width:"600px"}} onChange={handleInputChange}></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>ImageURL</label>
            <input type="text" class="form-control"  placeholder="ImageUrl" name='imageurl'  id="exampleInputPassword1" onChange={handleInputChange} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Ratings</label>
            <input type="number" name='ratings'  class="form-control" placeholder="Ratings" id="exampleInputPassword1" onChange={handleInputChange} />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Number Of Customers</label>
            <input type="number"  placeholder="Number Of Customers" name='numberOfBuys' class="form-control" id="exampleInputPassword1" onChange={handleInputChange} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}

export default AddList