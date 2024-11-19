import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../profile-components/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/pexels-polina-tankilevitch-3875430.jpg';
import Navbar from '../components/Additionals/Navbar';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});
const UserProfile = () => {
  const { isLoggedIn, userData, logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [user_Data, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
  });
  
  const [updatedUserData, setUpdatedUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (userData && userData.email) {
        try {
          
          const response = await axiosInstance.get('/api/fetchUserData', {
            params: {
              email: userData.email,
            },
          });
          const userDataFromAPI = response.data;
          setUserData(userDataFromAPI);
          setUpdatedUserData(userDataFromAPI);
        } catch (error) {
          console.error('Error fetching User Data:', error);
        }
      }
    };

    fetchUserData();
  }, [userData]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSaveChanges = async () => {
    try {
      await axiosInstance.post('/api/updateUserData', {
        username: user_Data.username,
        updatedUserData,
      });
      const response = await axiosInstance.get('/api/fetchUserData', {
        params: {
          username: user_Data.username,
        },
      });
      const updatedUserDataFromAPI = response.data;
      setUserData(updatedUserDataFromAPI);
      setUpdatedUserData(updatedUserDataFromAPI); 
    } catch (error) {
      console.error('Error updating User Data:', error);
    }
  };
  
  return (
   
    <div className="container" style={{ 
      backgroundColor: '#F7F7F8', 
      color: '#92A4B1', 
      padding: '20px',
      backgroundImage: `url(${backgroundImage})`,  // Use backticks for string interpolation
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
 
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
          <div className="card my-4"  style={{ backgroundColor: 'white', color: '#5A7480' }}>
              <div className="card-body" style={{marginTop:"3%"}}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt="Admin"
                    className="rounded-circle p-1 bg-primary"
                    width="110"
                  />
                  <div className="mt-3">
                    {/* <h4> {${user_Data.firstName} ${user_Data.lastName}}</h4> */}
                    <h4>{`${user_Data.firstName} ${user_Data.lastName}`}</h4>

                    <p className="text-secondary mb-1">{user_Data.email}</p>
                    <p className="text-secondary mb-1">{user_Data.username}</p>

                  </div>
                </div>
                <hr className="my-4" />
                <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-start align-items-center flex-wrap">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                  width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                 strokeWidth="2"
               strokeLinecap="round"
                strokeLinejoin="round"
                 className="feather feather-globe me-2 icon-inline"
                  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
  <h6 className="mb-0">Website</h6>
  <a href="https://apparelplm.com" className="text-secondary ms-2" target="_blank" rel="noopener noreferrer">https://apparelplm.com</a>
</li>

<li className="list-group-item d-flex justify-content-start align-items-center flex-wrap">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-github me-2 icon-inline"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
  <h6 className="mb-0 me-2">Github</h6>
  <span className="text-secondary">Apparel-PLM</span>
</li>

                  {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-twitter me-2 icon-inline text-info"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                      Twitter
                    </h6>
                    <span className="text-secondary">@apparelplm</span>
                  </li> */}
                  {/* <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-instagram me-2 icon-inline text-danger"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </h6>
                    <span className="text-secondary">apparelplm</span>
                  </li> */}
                  <li className="list-group-item d-flex justify-content-start align-items-center flex-wrap">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-facebook me-2 icon-inline text-primary"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
  <h6 className="mb-0 me-2">Facebook</h6>
  <span className="text-secondary">apparelplm</span>
</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
          <div className="card my-5" 
         style={{
          background: "linear-gradient(to right, #1E2D3B 50%, white 50%)",
          color: "black", 
         }}
         >
             <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{  color: "white", }}>First Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={updatedUserData.firstName}
                      onChange={(e) => setUpdatedUserData({ ...updatedUserData, firstName: e.target.value })} 
                      style={{ backgroundColor: 'F5F5F5', color: '#000' }}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{  color: "white", }}>Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input 
                      type="text" 
                      className="form-control"  
                      value={updatedUserData.lastName}
                      onChange={(e) => setUpdatedUserData({ ...updatedUserData, lastName : e.target.value })}
                      style={{ backgroundColor: 'F5F5F5', color: '#000' }}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{  color: "white", }}>Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={updatedUserData.email}
                      onChange={(e) => setUpdatedUserData({ ...updatedUserData, email: e.target.value })} 
                      style={{ backgroundColor: 'F5F5F5', color: '#000' }}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{  color: "white", }}>Password</h6>
                  </div>
                  <div className="col-sm-9 position-relative">
                    <input 
                      type={showPassword ? 'text' : 'password'} 
                      className="form-control" 
                      value={updatedUserData.password}
                      onChange={(e) => setUpdatedUserData({ ...updatedUserData, password: e.target.value })} 
                      style={{ backgroundColor: 'F5F5F5', color: '#000' }}
                    />
                    <FontAwesomeIcon 
                      icon={showPassword ? faEyeSlash : faEye} 
                      className="position-absolute top-50 translate-middle-y end-0 me-1" 
                      onClick={togglePasswordVisibility} 
                      style={{ cursor: 'pointer' }} 
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-sm-3">
                    <h6 className="mb-0" style={{  color: "white", }}>Username</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={updatedUserData.username}
                      onChange={(e) => setUpdatedUserData({ ...updatedUserData, username: e.target.value })} 
                      style={{ backgroundColor: 'F5F5F5', color: '#000' }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <input 
                     type="button" 
                     className="btn btn-primary px-4" 
                     onClick={handleSaveChanges} 
                     value="Save Changes" 
                   />
                 </div>
               </div>
             </div>
               
              </div>
            </div>
            {/* <div className="row">
              <div className="col-sm-12">
              <div className="card my-4"  style={{ backgroundColor: 'white', color: '#5A7480' }}>
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3">Project Status</h5>
                    <p>Web Design</p>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>Website Markup</p>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: '72%' }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>One Page</p>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: '89%' }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>Mobile Template</p>
                    <div className="progress mb-3" style={{ height: '5px' }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: '55%' }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p>Backend API</p>
                    <div className="progress" style={{ height: '5px' }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: '66%' }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      
  );
};

export default UserProfile;