import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Post from './Post';
import Navbar from './Navbar';
import Missing from './Missing';
import "../Assets/CSS/FullList.css"
import { Link } from 'react-router-dom';


const FullList = ({PopularCollections,BiographyCollections,HorrorCollections,RomanceCollections,ScienceFictionsCollections}) => {
  const [selectedOption, setSelectedOption] = useState('PopularCollections');
  const [inputValue, setInputValue] = useState('');
  let selectedCollection =null;
  const handleDropdownChange = (option) => {
    setSelectedOption(option);
    console.log(option);
  };
      
      const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  
  
  if(selectedOption==="BiographyCollections")
  {
    selectedCollection = BiographyCollections;
  }
  else if(selectedOption==="HorrorCollections")
  {
    selectedCollection = HorrorCollections;
  }
  else if(selectedOption==="RomanceCollections")
  {
    selectedCollection = RomanceCollections;
  }
  else if(selectedOption==="ScienceFictionsCollections")
  {
    selectedCollection = ScienceFictionsCollections;
  }
  else if(selectedOption==="PopularCollections")
  {
    selectedCollection = PopularCollections;
  }

if(selectedCollection===null)
{
    return(
        <Missing/>
    )
}
const filteredPosts = selectedCollection.filter((item) => {
  return item.name.toLowerCase().includes(inputValue.toLowerCase());
});
console.log(filteredPosts);
  return (
    <>
      <Navbar />
      <div className='searchBar'>
        <div>
          <Dropdown  onSelect={handleDropdownChange}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{alignItems:"center",justifyContent:"center"}}>
              Collections
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="PopularCollections">Popular Collections</Dropdown.Item>
              <Dropdown.Item eventKey="BiographyCollections">Biography Collections</Dropdown.Item>
              <Dropdown.Item eventKey="HorrorCollections">Horror Collections</Dropdown.Item>
              <Dropdown.Item eventKey="RomanceCollections">Romance Collections</Dropdown.Item>
              <Dropdown.Item eventKey="ScienceFictionsCollections">Science Fictions Collections</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div class="input-group" style={{maxWidth:"560px"}}>
          <input type="text" class="form-control" placeholder="Book Name" style={{maxWidth:"560px"}} aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event)=>handleInputChange(event)}/>
        </div>
        <div>
        <Link to={"\add"} style={{textDecoration:"none"}}>
          <button type="button" class="btn btn-danger">Add to Collections</button>
        </Link>
        </div>
      </div>
      <div className="fullcontainer outer">
      {filteredPosts.map((item) => (
          <Post
            key={item.id}
            id={item.id}
            name={item.name}
            author={item.author}
            url={item.imageurl}
            price={item.price}
            description={item.description}
            collection={selectedOption}
          />
        ))}
      </div>
      <p>Selected Dropdown Value: {selectedOption}</p>
      <p>Input Value: {inputValue}</p>
    </>
  );
        
};

export default FullList;
