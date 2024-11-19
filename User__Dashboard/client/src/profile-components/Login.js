import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../profile-components/AuthContext";
import pex from '../assets/LOGO.png'
import backgroundImage from "../assets/pexels-polina-tankilevitch-3875430.jpg";

// import {GoogleLogin} from 'react-google-login';
// import { isEmail } from 'validator';
import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});
const Login = () => {
  const Navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "1072306097003-4ni1r4egjla5p5aaanah2liu1aid31tj.apps.googleusercontent.com",
      });
    });
  }, []);

  
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Username and password are required.");
      return;
    }
    try {
      setLoading(true);
      const response = await axiosInstance.post("/api/login", {
        email,
        password,
      });
      console.log(response.data);
      const userData = response.data;
      setMessage("Login successful!");
      setSuccessful(true);
      login(userData);
      Navigate("/LandingPage");
    } catch (error) {
      if (error.response.status === 404) {
        setMessage("Username not found.");
      } else if (error.response.status === 400) {
        setMessage("Password does not match.");
      } else {
        setMessage(
          "Login failed. Please check your credentials and try again."
        );
      }
      console.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const colorPalette = {
    primary: "#1E2025",
    secondary: "#29343D",
    tertiary: "#3C5665",
    quaternary: "#5A7480",
    quinary: "#92A4B1",
  };

  // const required = (value) => {
  //   if (!value) {
  //     return (
  //       <div className="invalid-feedback d-block" style={{ color: "#dc3545" }}>

  //       </div>
  //     );
  //   }
  // };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="invalid-feedback d-block" style={{ color: "#dc3545" }}>
          Range 6 to 40 characters.
        </div>
      );
    }
  };
  return (
    <section className="text-center text-lg-start">
      <style>
        {`
        .cascading-right {
          margin-right: 0px;
        }
        .card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0); /* Add box-shadow to the right side */
          width: 90%; /* Increased width of the button */
          height: auto;
        }
        @media (max-width: 991.98px) {
          .cascading-right {
            margin-right: 0;
          }
        }
        section {
          background-image: url('https://images.unsplash.com/photo-1529720317453-c8da503f2051?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover; /* Ensure the image covers the entire section */
          background-position: center; /* Center the background image */
          height: 100vh; /* Set the section height to the viewport height */
          display: flex;
          align-items: center;
          justify-content: center;
        }
    
        .cascading-right {
          margin-right: -50px;
        }
        .form-outline {
          position: relative;
          
        }

        .btn-primary {
          font-size: 0.8rem; /* Adjusted text size */
          padding: 5px 5px; /* Increased padding for larger button */
          width: 88%; /* Increased width of the button */
          height: 2%; /* Set height to auto to maintain aspect ratio */
          font-weight: bold;
          background-color: black;l
        }

        .form-outline input {
          width: 90%; 
          height: auto; 
          border: 2px solid black;
          border-radius: 15px; 
          padding-top: 30px;
          padding-left: 15px ;
          margin-top:5%;
          margin-left : 5%;
        }

        .form-label {
          position: absolute;
          top: 8px;
          left: 8%;
          font-size: 0.7rem;
          color: ${colorPalette.quinary};
        }

        .invalid-feedback {
          color: #dc3545;
        }
      `}
      </style>

      <div className="container py-2">
      <div className="row g-0 align-items-center justify-content-center"> {/* Center the content horizontally and vertically */}
      <div className="col-lg-4 mb-6 mb-lg-0"
       style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0)", borderRadius: '20px' }}
      >
      <div className="card"
       style={{
       background: "linear-gradient(to right, #1E2D3B 50%, white 50%)",
       color: "black", // Text color
      }}
      >
       <div className="card-body p-2 shadow-8 text-center"  style={{ border: "2px  blue", borderRadius: "20px"}}>
        {/* <h2 className="fw-bold mb-3">Login</h2> */}
        <div style={{
         position: "absolute",
         bottom: "70%",
         left: "50%",
         transform: "translateX(-50%)",
         background: "linear-gradient(to bottom right, #2196F3, #1976D2)",
         borderRadius: "50%", /* Make it a circle */
         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
         padding: "16px",
         textAlign: "center",
         width: "160px", /* Adjust width as needed */
         height: "160px", /* Adjust height as needed */
         display: "flex",
         flexDirection: "column",
         justifyContent: "center",
       }}>
         <img src={pex} alt="Logo" style={{  transform: "translateX(-10%)", flexDirection: "column", width: "160px", height: "160px", borderRadius: "50%", position: "absolute", display: "flex", justifyContent: "center" }} />
      </div>

                <form onSubmit={handleLogin}>
                  <div className="form-outline mb-2 position-relative">
                    <input
                     style={{ marginTop: "60%" }}
                      type="text"
                      id="form3Example5"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example5">
                      Email
                    </label>
                    {/* {required(username)} */}
                  </div>

                  <div className="form-outline mb-1 position-relative">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    {/* {required(password)} */}
                    {vpassword(password)}
                  </div>
                  <div className="form-check d-flex justify-content-center mb-1">
                  <div className="form-check d-flex justify-content-center mb-1">
                  <label 
                   className="form-check-label me-10" 
                   htmlFor="form2Example33" 
                   style={{ 
                   marginRight: "50px", 
                   fontSize: "0.7rem",
                   color: "#231740"
                   }}
                   >
                  <span style={{color: "white"}}> Do Not Have</span><span style={{color: "black"}}> An Account? </span> 
                   <span style={{ textDecoration: 'none' ,color: 'blue'}}>
                 <NavLink to="/Register">Register Now</NavLink>
                 </span>
                 </label>
                    </div>
                  </div>
                  <button
        type="submit"
        className="btn btn-primary btn-block mb-2 d-flex justify-content-center align-items-center"
        style={{ width: "90%", margin: "auto" }}
        >
        <i className="bi bi-box-arrow-in-right fw-bold me-1"></i> {/* Bootstrap icon for sign-in */}
        SIGN IN 
        </button>
       <div className="text-center">

        <button
        type="button"
        className="btn btn-primary btn-block mb-3 d-flex justify-content-center align-items-center"
        style={{ width: "90%", margin: "auto" }}
        onClick={async () => {
        try {
         const googleUser = await window.gapi.auth2.getAuthInstance().signIn();
          const idToken = googleUser.getAuthResponse().id_token;
          const response = await axiosInstance.post("/api/googleLogin", {
           tokenId: idToken,
         });
          console.log(response.data);
          Navigate("/LandingPage");
         } catch (error) {
          console.error("Google login error:", error);
         }
        }}
        >
        <i className="bi bi-google me-1"></i> Google
       </button>
          </div>
          <label 
                   className="form-check-label me-10" 
                   htmlFor="form2Example33" 
                   style={{ 
                   marginLeft: "10px", 
                   fontSize: "0.7rem",
                   color: "${colorPalette.quinary}"
                   }}
                   >
                  <span style={{ textDecoration: 'none',color: 'blue' }}>
                 <NavLink to="/Resetpassword">Forgot Password ?</NavLink>
                    </span>
                   </label>
           {message && (
                    <div
                      className={`mt-3 alert ${
                        successful ? "alert-success" : "alert-danger"
                      }`}
                      role="alert"
                    >
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://c1.wallpaperflare.com/preview/753/976/863/apparel-clothing-fashion-hangers.jpg "
              className="rounded-4 shadow-8"
              alt=""
              style={{
                width: "700px",
                height: "650px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
