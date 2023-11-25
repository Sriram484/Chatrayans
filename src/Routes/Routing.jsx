import React from 'react'
import Home_Body from '../Components/Home_Body'
import About from "../Components/About"
import Auth from "../Components/Auth"
import Detail_Book from '../Components/Detail_Book'
import Missing from '../Components/Missing'
import { productData } from '../Assets/Data/Demo_Db'
import { Route, Routes } from 'react-router-dom'
import useFetchCollection from '../Assets/firebase/useFetchCollection'

const Routing = () => {

  const { documents: PopularCollections } = useFetchCollection("PopularCollections");
  const { documents: BiographyCollections } = useFetchCollection("BiographyCollections");
  const { documents: HorrorCollections } = useFetchCollection("HorrorCollections");
  const { documents: RomanceCollections } = useFetchCollection("RomanceCollections");
  const { documents: ScienceFictionsCollections } = useFetchCollection("ScienceFictionsCollections");

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
        <Routes>
            <Route exact path='/' element={<Auth/>}/>
            <Route path='/home' 
              element={<Home_Body
                PopularCollections={PopularCollections}
                BiographyCollections={BiographyCollections}
                HorrorCollections={HorrorCollections}
                RomanceCollections={RomanceCollections}
                ScienceFictionsCollections={ScienceFictionsCollections} 
            />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:collection/:id' 
              element={
                <Detail_Book 
                  PopularCollections={PopularCollections}
                  BiographyCollections={BiographyCollections}
                  HorrorCollections={HorrorCollections}
                  RomanceCollections={RomanceCollections}
                  ScienceFictionsCollections={ScienceFictionsCollections} 
                />} 
            />
            <Route path='*' element={<Missing/>} />
        </Routes>
    </>
  )
}

export default Routing