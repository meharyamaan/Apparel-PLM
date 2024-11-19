import React, { useState, useEffect } from 'react';
import { useAuth } from '../profile-components/AuthContext';
import Sidebar from './Additionals/SideBar';
import OrderCard from './Additionals/OrderCard';
import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

function OrdersList() {
  const [orders, setOrders] = useState(null);
  // eslint-disable-next-line 
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line 
  const [error, setError] = useState(null);
  // eslint-disable-next-line 
  const { isLoggedIn, userData, logout } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        if (userData && userData.email) {
          const response = await axiosInstance.get(`/api/orders/${userData.email}`);
          setOrders(response.data);
        } else {
          setOrders([]);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userData]);

  return (
    <>
      <div style={{ backgroundColor: '#1E2D3B', height: '50px', width: '100%', boxShadow: '0 0.25em 0.75em rgba(0, 0, 0, 0.1)' }}></div>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ height: 'calc(100vh - 50px)', overflowY: 'auto', flex: 1 }}>
          <div style={{ height: '100%', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>
              {`
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <div className="container">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <h2 className="text-center" style={{ fontFamily: 'Montserrat' }}>My Orders</h2>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {orders && orders.length > 0 ? (
                  orders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))
                ) : (
                  <div className="no-orders" style={{ width: '100%', textAlign: 'center', padding: '20px', fontFamily: 'Montserrat' }}>
                    <h3 style={{ color: '#888' }}>No Orders Found</h3>
                    <p style={{ color: '#aaa' }}>It looks like you haven't placed any orders Yet.</p>
                    <p style={{ color: '#aaa' }}>Place an Order at Alta Globals to see Your Order Here!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersList;
