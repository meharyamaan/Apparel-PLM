import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../profile-components/AuthContext';
import './../../Styles/navbar.css';
// import logo from '../assets/plmlogo.png'
import plm from '../../assets/finallogo.png'




export default function Navbar() {
  const { isLoggedIn, userData, logout } = useAuth();
  const Navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to manage loader visibility

  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader
    // Simulate logout delay
    setTimeout(() => {
      logout(userData);
      Navigate('/LandingPage');
      setIsLoading(false); // Hide loader
    }, 4000); // Hide loader after 3 seconds
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  return (
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={plm} alt="" style={{ height: '3rem', width: '3rem' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list" style={{ fontSize: '50px', color: 'white' }}></i>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header" style={{ backgroundColor:'#1E2D3B' }}>
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color:'white' , fontFamily: 'Montserrat'}}>
                Apparel PLM
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body" style={{ backgroundColor:'white' }}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  {isLoggedIn ? (
                    <div className='log-out' style={{ display: 'flex', alignItems: 'center' }}>
                     <Link to="/UserProfile"> <button id="btn-message" className="button-message">
                        <div className="content-avatar">
                          <div className="status-user" />
                          <div className="avatar">
                            <svg
                              className="user-img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="notice-content">
                          <div className="username">{userData.username}</div>
                          <div className="lable-message">
                            Logged In
                            <span><i className="bi bi-door-open"></i></span>
                          </div>
                          <div className="user-id">{userData.email}</div>
                        </div>
                      </button>
                      </Link>
                      {isLoggedIn && (
                        <Link to="/logout" className="nav-link" onClick={handleLogout} style={{ marginLeft: 'auto' }}>
                         <button className="Btn">
                            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                            <div className="text">Logout</div>
                          </button>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <Link to="/Login" className="nav-link" >
                      <button className="signupBtn">
                        SIGN IN
                        <span className="arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                        </span>
                      </button>
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" style={{ fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'Montserrat' }}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                {isLoggedIn && (
                  <Link className="nav-link active" to="/OrdersList" style={{fontWeight: 'bold', letterSpacing: '1px', fontFamily: 'Montserrat' }}>
                    Dashboard
                  </Link>
                )}
              </li>
              {isLoading && (
                <div className='cent-loader'>
                <div className="loader">
                  <div className="box1"></div>
                  <div className="box2"></div>
                  <div className="box3"></div>
                </div>
                </div>
              )}

              </ul>
              {/* <form className="d-flex mt-3" role="search">
                <div className='me-2'>
                  <div className="InputContainer">
                    <input placeholder="Search.." id="input" className="input" name="text" type="text" />
                  </div>
                </div>
              </form> */}
          </div>
        </div>
      </div>
    </nav>
  </div>
);

}               
               
  
