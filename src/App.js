import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Routing from './Routes/Routing';
import useFetchCollection from './Assets/firebase/useFetchCollection.js'
import {productData} from "./Assets/Data/Demo_Db.jsx"
import AuthProvider from "./Components/useContext/Admin.jsx" ;

function App() { 
  return (
    <AuthProvider>
      <div className="App">
        <Routing/>
      </div>
    </AuthProvider>
  );
}


export default App;
