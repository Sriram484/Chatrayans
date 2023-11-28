import React, { useContext } from 'react'
import Home_Body from '../Components/Home_Body'
import About from "../Components/About"
import Auth from "../Components/Auth"
import Detail_Book from '../Components/Detail_Book'
import Missing from '../Components/Missing'
import { Route, Routes } from 'react-router-dom'
import useFetchCollection from '../Assets/firebase/useFetchCollection'
import FullList from '../Components/FullList'
import UpdateList from '../Components/UpdateList'
import AddList from '../Components/AddList'
import ViewCarts from '../Components/ViewCarts'
import { AuthContext } from "../Components/useContext/Admin";


const Routing = () => {
  const { auth } = useContext(AuthContext);
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
            {(auth.user)  && (
            <>
            
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
              <Route path='/fullList' element={<FullList 
                    PopularCollections={PopularCollections}
                    BiographyCollections={BiographyCollections}
                    HorrorCollections={HorrorCollections}
                    RomanceCollections={RomanceCollections}
                    ScienceFictionsCollections={ScienceFictionsCollections}
                  />} 
              />
              <Route path='/update/:collection/:id' element={<UpdateList/>}/>
              <Route path='/fullList/add' element={<AddList/>}/>
              <Route path='/cart' element={<ViewCarts/>}/>
              <Route path='*' element={<Missing/>} />
              </>
             )} 
             <Route path='*' element={<Auth/>} />
             


        </Routes>
    </>
  )
}

export default Routing