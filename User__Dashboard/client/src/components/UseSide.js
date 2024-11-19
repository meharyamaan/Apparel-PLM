import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KeyProcessCard from '../components/Additionals/KeyProcessCard.js';
import BarChart from './Additionals/Charts/BarChart.js';
import Featured from "./Additionals/Charts/featured/Featured.js";
import Sidebar from './Additionals/SideBar.js';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import OrderTitleCard from './Additionals/OrderTitleCard.js';
// import Chart from "./Additionals/Charts/chart/Chart.js";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
  });
  
export default function UserSide() {
   let { id } = useParams();
   const location = useLocation();
   const { title } = location.state || {};
    // const [orderDetails, setOrderDetails] = useState({ data: null, totalSum: null }); // Modify state to hold both orderData and totalSum
    const [orderDetails, setOrderDetails] = useState(null); 
  
    // const projectId = "1000";
  
    useEffect(() => {
      const fetchCardDetails = async () => {
        try {
          const response = await axiosInstance.get(`/api/singleOrder/${id}`);
          console.log("Response data:", response.data); 
          const { orderData, totalSum } = response.data;
          setOrderDetails({ data: orderData, totalSum });
          // console.log("On Das", response);
        } catch (error) {
          console.error('Error fetching card details:', error);
        }
      };
    
      fetchCardDetails();
    }, [id]);
  
    // useEffect(() => {
    //   const fetchCardDetails = async () => {
    //     try {
    //       const response = await axiosInstance.get(`/api/singleOrder/${id}`);
    //       console.log("Response data:", response.data); 
    //       const { orderData} = response.data;
    //       setOrderDetails(orderData);
    //       console.log("On Das", response);
    //     } catch (error) {
    //       console.error('Error fetching card details:', error);
    //     }
    //   };
    
    //   fetchCardDetails();
    // }, [id]);

return (
  <div>
    <div style={{backgroundColor: '#1E2D3B', height: '50px', width: '100%',  boxshadow: '0 0.25em 0.75em rgba(0, 0, 0, 0.1)'}}></div>
      <div style={{display: 'flex'}}>
        <Sidebar/>
        
        <div style={{ height: 'calc(100vh - 50px)', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>
                {`
                  ::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>

      <OrderTitleCard title={title}/>
          <div className="col mb-4">
              <div className="home">
                <div className="homeContainer">
                  <KeyProcessCard orderDetails={orderDetails}/>
                </div>
              </div>
          </div>

          <div className="container" style={{ display: 'flex', width: '100%', gap: '10px', marginTop: '35px', marginBottom: '35px' }}>
            <div className="barChartContainer" style={{ flex: 0.8 }}>
              <BarChart orderDetails={orderDetails}/>
            </div>
          <div className="featuredContainer" style={{ flex: 0.2 }}>
              <Featured orderDetails={orderDetails}/>
            </div>
          </div>
        </div>
      </div>
     </div>
</div>
    );
}