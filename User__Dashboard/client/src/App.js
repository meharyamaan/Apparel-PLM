import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './profile-components/AuthContext';
import Register from './profile-components/Register';
import Login from './profile-components/Login';
import UserProfile from './profile-components/UserProfile';
import Resetpassword from './profile-components/Resetpassword';
// import Navbar from './components/Additionals/Navbar';
// import Sidebar from './components/Sidebar';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';

///////////////////////// Asfand //////////////////
import LandingPage from "./components/LandingPage";
import UserSide from './components/UseSide';
import OrdersList from './components/OrdersList';
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
import '../src/App.css'; // Import CSS for layout

const clientid = "1072306097003-4ni1r4egjla5p5aaanah2liu1aid31tj.apps.googleusercontent.com";

const App = () => {
  useEffect(() => {
    function start()
    {
      gapi.client.init({
        clientid: clientid,
        scope: " "
      })
    };
    console.log('Current path:', window.location.pathname);
    gapi.load('client:auth2',start);
    
      });

      useEffect(() => {
        const isProjectStart = !sessionStorage.getItem('isProjectStart');
        if (isProjectStart) {
          sessionStorage.setItem('isProjectStart', 'true');
          localStorage.removeItem('userData');
        }
      }, []);
  return (
    <Router>
      <AuthProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/OrdersList" element={<OrdersList />} />
                <Route path="/UserProfile" element={<UserProfile />} />
                <Route path="/Resetpassword" element={<Resetpassword />} />
                <Route path="/UserSide/:id" element={<UserSide />} />
                <Route path="/LandingPage" element={<LandingPage />} />

              </Routes>
      </AuthProvider>
      <ToastContainer />
    </Router>
  );
}

export default App;
