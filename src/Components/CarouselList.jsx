import React from 'react'
import { responsive } from '../Assets/API/Carousel_Responsive';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import See_More from './SeeMore';
import { Link } from 'react-router-dom';
import ProductItems from './ProductItems';


const CarouselList = ({Collections}) => {
  
  if (Collections === null||!Array.isArray(Collections)) 
  {
    return <div>Loading...</div>;
  }
  
  return (
    <>
        <Carousel responsive={responsive}>
                    {Collections
                    .map((item) =>{
                      if(item!=null){
                        return(
                          <Link to={`/detail/${item.type}/${item.id}`} key={item.id} className='Link'>
                            <ProductItems
                            name={item.name}
                            author={item.author}
                            url={item.imageurl}
                            price={item.price}
                            description={item.description}
                          />
                          </Link>
                          );
                      }

                      return null;
                    })
                    }
                    <See_More/>
                </Carousel>
    </>
  )
}

export default CarouselList