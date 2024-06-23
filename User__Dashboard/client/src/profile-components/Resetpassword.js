import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import pex from '../assets/LOGO.png'
const Resetpassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(newPassword);
    try {
      const response = await axiosInstance.post('/api/resetPassword', {
        userEmail,
        newPassword,
        confirmPassword,
      });
      console.log(userEmail);
      setMessage(response.data.message);
      setSuccessful(true);
    } catch (error) {
      setMessage('Password reset failed. Please check your inputs and try again.');
      setSuccessful(false);
      console.error(error.response.data);
    }
  };
  const colorPalette = {
    primary: '#1E2025',
    secondary: '#29343D',
    tertiary: '#3C5665',
    quaternary: '#5A7480',
    quinary: '#92A4B1',
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
          margin-left : 6.5%;
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
      <div className="col-lg-4 mb-5 mb-lg-0"
     style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0)", borderRadius: '20px'}}
>

           <div className="card"
       style={{
        background: "linear-gradient(to right, #1E2D3B 50%, white 50%)",
       color: "black",
       height: '500px' // Text color
      }}
      >
               <div className="card-body p-4 shadow-8 text-center"  style={{ border: "2px  blue", borderRadius: "20px"}}>
        <div style={{
         position: "absolute",
         bottom: "70%",
         left: "50%",
         marginBottom: "-8%",
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
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-2 position-relative"style={{marginTop: "60%"}}>
                    <input
                      type="text"
                      id="form3Example5"
                      className="form-control"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example5">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-2 position-relative" >
                    <input
                      type="password"
                      id="form3Example5"
                      className="form-control"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example5">
                      New Password
                    </label>
                  </div>

                  <div className="form-outline mb-2 position-relative">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Confirm Password
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Change Password
                  </button>
                  {message && (
                    <div className={`mt-3 alert ${successful ? 'alert-success' : 'alert-danger'}`} role="alert">
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
              style={{ width: '700px', height: '700px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Resetpassword;
