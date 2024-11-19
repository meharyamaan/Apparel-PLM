import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const OrderUpdate = ({token}) => {


  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setOrders(data);
        } else {
          toast.error('Failed to fetch orders', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
          });
        }
      } catch (error) {
        toast.error('Error fetching orders', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    };

    fetchOrders();
  }, [token]);

  const handleOrderChange = (event) => {
    const orderId = event.target.value;
    setSelectedOrderId(orderId);
    const order = orders.find((order) => order._id === orderId);
    setSelectedOrder(order);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('orderId', selectedOrderId);
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`http://localhost:4000/api/orders/${selectedOrderId}/update`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success('Order updated successfully', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      } else {
        const data = await response.json();
        toast.error(data.error, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error('Error updating order', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };


  return (
    <>
      
    <div className="px-10">
      <div className="flex flex-col px-16 pt-5 pb-10 mt-16 shadow-md">
        <h1 className="text-2xl font-bold text-center pb-6">Update Order</h1>

        <label htmlFor="orderSelect" className="mb-1 font-semibold">Select Order:</label>
        <select
          id="orderSelect"
          value={selectedOrderId}
          onChange={handleOrderChange}
          className="py-1 rounded-md mb-2 border-2"
        >
          <option value="" disabled>Select an order to update</option>
          {orders.map((order) => (
            <option key={order._id} value={order._id}>
              {order.title}
            </option>
          ))}
        </select>

        {selectedOrder && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Order Details</h2>
            <p><strong>Title:</strong> {selectedOrder.title}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>End Date:</strong> {new Date(selectedOrder.endDate).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {selectedOrder.description}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Products:</strong> {selectedOrder.products.length}</p>
          </div>
        )}

        <label htmlFor="excelFile" className="mt-4 mb-1 font-semibold">Update Excel File:</label>
        <input type="file" className="py-1 rounded-md mb-2" name="excelFile" id="excelFile" onChange={handleFileChange} />

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-blue-800 py-2 px-2 rounded-md text-white"
            onClick={handleUpdate}
            disabled={!selectedOrderId || !selectedFile}
          >
            Update Order
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default OrderUpdate