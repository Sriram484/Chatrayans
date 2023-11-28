import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Routing from './Routes/Routing';
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
