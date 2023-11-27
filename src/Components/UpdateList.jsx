import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFirestore } from "../Assets/firebase/useFireStore";
import Navbar from './Navbar';
import "../Assets/CSS/UpdateList.css"
import { useParams } from 'react-router-dom';
import useFetchCollection from '../Assets/firebase/useFetchCollection';
import { useNavigate } from 'react-router-dom';


const UpdateList = () => {
    const navigate = useNavigate();
    const { collection, id } = useParams();
    const {updateDocument} = useFirestore(collection);
    const {documents : prevObj} = useFetchCollection(collection);
    const [updateObj, setUpdateObj] = useState({
        name: "",
        author: "",
        price: "",
        description: "",
        imageurl:"",
        ratings: "",
        numberOfBuys: "",
      });

      useEffect(() => {
        if (prevObj && id) {
            const foundData = prevObj.find(item => item.id === id);
            if (foundData) {
                setUpdateObj({
                    name: foundData.name || '',
                    author: foundData.author || '',
                    price: foundData.price || '',
                    description: foundData.description || '',
                    imageurl: foundData.imageurl || '',
                    ratings: foundData.ratings || '',
                    numberOfBuys: foundData.numberOfBuys || '',
                });
            }
        }
    }, [prevObj, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateDocument(id,updateObj);
        setUpdateObj({
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
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


  return (
    <>
    <Navbar/>
    <div className='updateContent'>
        <form style={{maxWidth:"700px"}} onSubmit={(e)=>handleSubmit(e)}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label" style={{color:"black"}}>Name</label>
            <input type="text" placeholder="Name" value={updateObj.name} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Author</label>
            <input type="text" value={updateObj.author} placeholder="Author" name='author' class="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Price</label>
            <input type="number" value={updateObj.price} placeholder="Price" name='price' class="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Description</label>
            <textarea class="form-control" value={updateObj.description} placeholder="Description" name='description' id="floatingTextarea2" style={{height: "200px", width:"600px"}} onChange={handleInputChange}></textarea>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>ImageURL</label>
            <input type="text" class="form-control" value={updateObj.imageurl} placeholder="ImageUrl" name='imageurl'  id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Ratings</label>
            <input type="number" name='ratings' value={updateObj.ratings} class="form-control" placeholder="Ratings" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label" style={{color:"black"}}>Number Of Customers</label>
            <input type="number" value={updateObj.numberOfBuys} placeholder="Number Of Customers" name='numberOfBuys' class="form-control" id="exampleInputPassword1" onChange={handleInputChange}/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}

export default UpdateList