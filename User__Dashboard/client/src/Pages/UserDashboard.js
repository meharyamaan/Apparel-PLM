import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Featured from "../Dashcomponents/featured/Featured.js";
import Chart from "../Dashcomponents/chart/Chart.js";
import KeyProcessCard from '../components/Additionals/KeyProcessCard.js';
import "./../Styles/Userdashboard.css";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

const Userdashboard = () => {
  const [orderDetails, setOrderDetails] = useState({ data: null, totalSum: null }); // Modify state to hold both orderData and totalSum
  const projectId = "1000";

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/orderdetails/${projectId}`);
        console.log("Response data:", response.data); // Log the response data
        const { orderData, totalSum } = response.data;
        setOrderDetails({ data: orderData, totalSum }); // Set both orderData and totalSum in state
        console.log("On Das", response);
      } catch (error) {
        console.error('Error fetching card details:', error);
      }
    };
  
    fetchCardDetails();
  }, [projectId]); // Make

  return (
    <div className="container d-flex flex-column">
      <div className="home d-flex flex-wrap justify-content-between">
        <div className="container" style={{ display: 'flex' }}>
          <div className="home">
            <div className="homeContainer">
              <KeyProcessCard orderDetails={orderDetails} /> {/* Pass orderData to KeyProcessCard */}
              {/* <h1>{orderDetails.totalSum}</h1> */}
              <div className="charts">
                <Featured />
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
