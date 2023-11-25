import React from 'react'
import "react-multi-carousel/lib/styles.css";
import "../Assets/CSS/Home_Body.css"
import Navbar from './Navbar';
import CarouselList from './CarouselList';
import Footer from './Footer';


const Home_Body = ({PopularCollections,BiographyCollections,HorrorCollections,RomanceCollections,ScienceFictionsCollections}) => {
    if (PopularCollections === null ||
        BiographyCollections === null ||
        HorrorCollections === null ||
        RomanceCollections === null ||
        ScienceFictionsCollections === null||
        !Array.isArray(PopularCollections)||
        !Array.isArray(BiographyCollections)||
        !Array.isArray(HorrorCollections)||
        !Array.isArray(RomanceCollections)||
        !Array.isArray(ScienceFictionsCollections)
      ) 
      {
        return <div>Loading...</div>;
      }
    return (
        <>
            <Navbar/>
            <div className="Body">
            <h1>Popular Collections</h1>
                <CarouselList Collections={PopularCollections}/>
                <hr size="10"/>
            </div>
            <div className="Body">
            <h1>Biography Collections</h1>
                <CarouselList Collections={BiographyCollections}/>
                <hr size="10"/>
            </div>
            <div className="Body">
            <h1>Science Fictions Collections</h1>
                <CarouselList Collections={ScienceFictionsCollections}/>
                <hr size="10"/>
            </div>
            <div className="Body">
            <h1>Horror Collections</h1>
                <CarouselList Collections={HorrorCollections}/>
                <hr size="10"/>
            </div>
            <div className="Body">
            <h1>Romance Collections</h1>
                <CarouselList Collections={RomanceCollections}/>
                <hr size="10"/>
            </div>
            <Footer/>
        </>
      );
}

export default Home_Body