import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce} from 'react-toastify';

const OrderForm = ({token}) => {
  const [title, setTitle] = useState('');
  const [email, setemail] = useState('');
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'email':
        setemail(value);
        break;
      case 'endDate':
        setEndDate(new Date(value)); 
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('email', email);
    formData.append('endDate', endDate.toISOString()); // Convert date to ISO format
    formData.append('description', description);
    formData.append('excelFile', selectedFile); // Add the file

    // for (const [key, value] of formData.entries()) {
    //   console.log(Key: ${key}, Value: ${value});
    // }

    // Simulate API call (replace with your actual fetch logic)
    try {
      const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        body: formData, 
        headers : {
        Authorization : `Bearer ${token}`,
        }
      });
      const json = await response.json();

      if (response.ok) {
        toast("Order Created Succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
          });
      } else {
        toast.error(json.errors[0], {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
          });
      }
    } catch (error) {
        toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
          });
    }
  };

  return (
    <>
     <ToastContainer />
    <form onSubmit={handleSubmit} className='px-10'>
        <div >
        <div className='flex flex-col px-16 pt-5 pb-10 mt-16 shadow-md'>
            <h1 className='text-2xl font-bold text-center pb-6'>Order Form</h1>
      <label htmlFor="title" className='mb-1 font-semibold'>Title:</label>
      <input
      className='py-1 rounded-md mb-2 border-2'
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={handleInputChange}
        required
      />


<label htmlFor="email" className='mb-1 font-semibold'>Email:</label>
      <input
      className='py-1 rounded-md mb-2 border-2'
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="endDate" className='mb-1 font-semibold'>End Date:</label>
      <input
        className='py-1 rounded-md mb-2 border-2'
        type="date"
        name="endDate"
        id="endDate"
        value={endDate ? endDate.toISOString().substring(0, 10) : ''} // Format date for input
        onChange={handleInputChange}
        required
      />

      <label htmlFor="description" className='mb-1 font-semibold'>Description:</label>
      <textarea
       className='py-1 rounded-md mb-2 border-2'
        name="description"
        id="description"
        value={description}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="excelFile" className='mb-1 font-semibold'>Excel File:</label>
      <input type="file" className='py-1 rounded-md mb-2' name="excelFile" id="excelFile" onChange={handleFileChange} />
        <div className='flex justify-center'>
      <button type="submit" className='bg-blue-800 py-2 px-2 rounded-md text-white'>Create Order</button></div>
      </div>
      </div>
    </form>
    </>
  );
};


export default OrderForm;