import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Loader from './Loader';

const OrderDetails = ({token}) => {
  const {id} = useParams();
  const [orderDetails,
    setOrderDetails] = useState(null);
  const [isLoading,
    setIsLoading] = useState(false);
  const [error,
    setError] = useState(null);
    function calculateTotalQuantity(order = {
      XXL: 0,
      XL: 0,
      L: 0,
      M: 0,
      S: 0,
      XS: 0,
      XSS: 0
    }) {
      const quantities = Object.values(order);
      return quantities.reduce((acc, value) => acc + value, 0);
    }

  const fetchOrderDetails = async() => {
    setIsLoading(true);
    setError(null);



    try {
      const response = await fetch(`http://localhost:4000/api/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json"
        },
        method: 'GET'
      });

      const data = await response.json();
      setOrderDetails(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [id]);
  return (
    <div>
      {isLoading
        ? (<Loader/>)
        : (
          <div>
            {orderDetails && <div>
              <h1 className="text-2xl font-bold pl-8 mt-3">Order Details</h1>
              <div
                className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mx-10 mt-5">

                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Order Id</dt>
                    <dd className="text-gray-700 sm:col-span-2">{id}</dd>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Title</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.title}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Start Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails
                        .createdAt
                        .slice(0, 10)}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">End Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails
                        .endDate
                        .slice(0, 10)}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Status</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.status}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Description</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {orderDetails.description}
                    </dd>
                  </div>
                </dl>
              </div>
              <h1 className=' text-4xl m-4 text-center  font-bold'>
                Products
              </h1>
              <div className='flex flex-wrap gap-x-2 gap-y-2 mx-1 justify-center'>
                {orderDetails && orderDetails
                  .products
                  .map((order, i) => (
                    <div
                      className="relative  shadow-lg block w-[380px] overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">

                      <div className="sm:justify-between sm:gap-4">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 ">
                            {order.FABRIC}
                          </h5>

                          <p className="mt-1 text-xs font-medium text-gray-600">{order.STYLE}</p>
                          <p className="mt-1 text-xs font-medium text-gray-600">{order.VENDOR}</p>
                        </div>

                        <p className="mt-1 text-xs font-medium text-gray-600">{order.AUDIT}</p>
                        <p className="mt-1 text-xs font-medium text-gray-600">{order.PODATE}</p>
                        <p className="mt-1 text-xs font-medium text-gray-600">{order.LAB}</p>
                      </div>

                      <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.XXS || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">XXS</dt>
                        </div>

                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.XS || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">XS</dt>
                        </div>

                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.S || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">S</dt>
                        </div>

                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.M || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">M</dt>
                        </div>

                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.L || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">L</dt>
                        </div>
                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.XL || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">XL</dt>
                        </div>
                        <div className="flex flex-col-reverse">
                          <dd className="text-xs text-gray-500">{order.XXL || 0}</dd>
                          <dt className="text-sm font-medium text-gray-600">XXL</dt>
                        </div>

                      </dl>
                    </div>
                  ))}
              </div>
            </div>
}
          </div>
        )}
    </div>

  );

};

export default OrderDetails