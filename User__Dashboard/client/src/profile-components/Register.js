import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmail } from "validator";
import pex from '../assets/LOGO.png'
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

const colorPalette = {
  primary: "#1E2025",
  secondary: "#29343D",
  tertiary: "#3C5665",
  quaternary: "#5A7480",
  quinary: "#92A4B1",
};
const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const response = await axiosInstance.post("/api/register", {
          firstName,
          lastName,
          email,
          password,
          username,
        });

        if (response.data.msg) {
          setSuccessful(true);
          setMessage(response.data.msg);
          navigate("/login"); // Redirect to login page after successful registration
        } else {
          setMessage("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during registration:", error.response || error);
        setMessage("Registration failed. Please try again.");
      }
    } else {
      setMessage("Some form fields are invalid. Please check and try again.");
    }
  };

  const validateForm = () => {
    return (
      firstName &&
      lastName &&
      email &&
      password &&
      username &&
      !required(firstName) &&
      !required(lastName) &&
      !required(email) &&
      !validEmail(email) &&
      !required(password) &&
      !vpassword(password)
    );
  };

  const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
        </div>
      );
    }
  };

  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="invalid-feedback d-block">
          Not valid email.
        </div>
      );
    }
  };

  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="invalid-feedback d-block">
          Range between 6 to 40 characters.
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
          width: 100%;
          height: 100vh; /* Set the section height to the viewport height */
          display: flex;
          align-items: center;
          justify-content: center;
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
          margin-left : 6%;
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

      <div className="container py-4">
      <div className="row g-0 align-items-center justify-content-center">
        <div
            className="col-lg-4 mb-6 mb-lg-0"
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0)", borderRadius: '20px' }}
       >
             <div
       className="card"
        style={{
          background: "linear-gradient(to right, #1E2D3B 50%, white 50%)",

         color: "black", // Text color
       }}
       >
            
      <div className="card-body p-4 shadow-8 text-center"  style={{ border: "2px  blue", borderRadius: "20px"}}>
                {/* <h2 className="fw-bold mb-3">Login</h2> */}
                <div style={{
       position: "absolute",
       bottom: "70%",
       left: "50%",
       transform: "translateX(-50%)",
       background: "linear-gradient(to bottom right, #2196F3, #1976D2)",
       borderRadius: "50%", /* Make it a circle */
       boxShadow: "0px 4px 10px rgba(0.5, 0, 0, 0.5)",
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
                <h2 className="fw-bold mb-5"></h2>
                <form onSubmit={handleSignUp}>
                  <div className="row">
                    <div className="col-md-6 mb-1">
                      <div className="form-outline" style={{marginTop: "80%",marginLeft: "9%",width: "120%"}}>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        {/* {required(firstName)} */}
                      </div>
                    </div>
                    <div className="col-md-6 mb-1">
                      <div className="form-outline"  style={{marginTop: "80%",marginleft: "15%",width: "90%"}}>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        {/* {required(lastName)} */}
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-1">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    {/* {required(email)} */}
                    {validEmail(email)}
                  </div>

                  <div className="form-outline mb-1">
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

                  <div className="form-outline mb-2">
                    <input
                      type="text"
                      id="form3Example5"
                      className="form-control"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example5">
                      Username
                    </label>
                    {/* {required(username)} */}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-1"
                  >
                    Sign up
                  </button>
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
        </div>
      </div>
    </section>
  );
};

export default Register;
