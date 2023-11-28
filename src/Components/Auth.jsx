
import React, { useState, useContext } from "react"
import "../Assets/CSS/Auth.css"
import { useNavigate} from "react-router-dom"
import { useFirestore } from "../Assets/firebase/useFireStore";
import useFetchCollection from '../Assets/firebase/useFetchCollection'
import { AuthContext } from "./useContext/Admin";




const Auth = ()=> {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);


  const {addDocument} = useFirestore('Users');
  const {documents:Users} = useFetchCollection("Users");
  const [authMode, setAuthMode] = useState('signin');
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  
      const [regData,setRegData] = useState({
        email: '',
        password: ''
      });

      const handleRegChange=(e)=>{
        const {name,value} = e.target;
        setRegData({
          ...regData,
          [name]:value,
        })
      }
      const handleRegSubmit=(e)=>{
        e.preventDefault();
        const { email, password } = regData;

        const foundUser = Users.find((item) => {
          return (
            item.email.trim().toLowerCase() === email.trim().toLowerCase() &&
            item.password === password
          );
        });
      
        if (foundUser) {
          setAuth({ isAuthenticated: foundUser.auth, name: foundUser.fullName,user:true});
          console.log(foundUser);
          navigate("/home");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      }

    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      auth:false
    });
  
    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      addDocument(formData);
      setAuthMode("signin")
      navigate("/");
    };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleRegSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleRegChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleRegChange}
              />
            </div>
            
              <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </div>
          
            <p className="text-center mt-2">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleFormSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            <p>
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Log In
            </span>
            </p>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control mt-1"
              placeholder="Eg Thirumurugan"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handleFormChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
          </div>
          <p className="text-center mt-2">
             <a href="#">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  )
};

export default Auth;