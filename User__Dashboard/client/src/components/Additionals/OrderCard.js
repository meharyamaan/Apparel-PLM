import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/ordercard.css';
import LoadingSpinner from './LoadingSpinner'; // Adjust the import path based on your project structure

const OrderCard = ({ order }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(`/UserSide/${order._id}`, { state: { title: order.title } });
    }, 1100);
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <LoadingSpinner />
        </div>
      )}
      <div className="col mb-4">
        <div className="link" onClick={handleCardClick}>
          <div className="containerPP flex-grow-1">
            <div className="box">
              <span className="title">{order.title}</span>
              <div className="circleB"></div>
              <div>
                <strong>{order.status}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;



// eslint-disable-next-line 
  {/* <div className="data-card-container">
        <div className="data-card">
          <h3 style={{ fontFamily: 'Montserrat' }}>{order.title}</h3>
        
       

<div class="root">
  <div className="containerP">
        <ul className="progressbar list-unstyled d-flex justify-content-around">
          <li className="active">Pending</li>
          <li>In Progress</li>
          <li>Finished</li>
        </ul>
      </div>
  </div>

       
        </div>
      </div> */}