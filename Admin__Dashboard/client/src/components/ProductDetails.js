import React, {useState, useEffect} from 'react';
import {CiEdit} from "react-icons/ci";
import {useParams} from 'react-router-dom';
import Loader from './Loader';

const ProductDetails = ({token}) => {
  const {id} = useParams();
  const [orderDetails,
    setOrderDetails] = useState(null);
  const [isLoading,
    setIsLoading] = useState(false);
  const [error,
    setError] = useState(null);

  const [startDate,
    setstartDate] = useState('')

  const [endDate,
    setEndDate] = useState('');

  const [did,
    setdid] = useState();

  const [model,
    setmodel] = useState(false);

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setstartDate(event.target.value);
  };

  const fetchOrderDetails = async() => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:4000/api/products/${id}`, {
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

  const edit = async(id, start, end) => {
    setmodel(true);
    setstartDate(start);
    setEndDate(end);
    setdid(id);
  }

  const handleupdate = async() => {
    try {
      const response = await fetch(`http://localhost:4000/api/products/${orderDetails._id}`, {
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/json"
        },
        method: 'PUT',
        body: JSON.stringify(did == 0
          ? {
            knittingstartDate: startDate,
            knittingendDate: endDate
          }
          : did == 1
            ? {
              knittingstartDate: startDate,
              knittingendDate: endDate
            }
            : {
              knittingstartDate: startDate,
              knittingendDate: endDate
            })
      });

      const data = await response.json();
      if (response.ok) {
        fetchOrderDetails();

      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      {isLoading
        ? (<Loader/>)
        : (
          <div>
            {orderDetails && <div>
              <h1 className="text-2xl font-bold pl-8 mt-3">Product Details</h1>
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
                    <dt className="font-medium text-gray-900">Style</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.STYLE}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Fabric</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.FABRIC}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Audit</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.AUDIT
}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Production Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails
                        .PODATE
                        .slice(0, 10)}</dd>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Proto</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.PROTO}</dd>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">PPS</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.PPS}</dd>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Yarn</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.YARN}</dd>
                  </div>
                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Remarks</dt>
                    <dd className="text-gray-700 sm:col-span-2">{orderDetails.Remarks}</dd>
                  </div>

                  <div
                    className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Lab
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {orderDetails.Lab}
                    </dd>
                  </div>
                </dl>
              </div>
              <h1 className=' text-4xl m-4 text-center  font-bold'>
                Quantity
              </h1>

              <div class="max-w-2xl mx-auto">

                <div class="flex flex-col">
                  <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div class="inline-block min-w-full align-middle">
                      <div class="overflow-hidden ">
                        <table
                          class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                          <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>

                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Size
                              </th>
                              <th
                                scope="col"
                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Quantity
                              </th>

                            </tr>
                          </thead>
                          <tbody
                            class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">XS</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.XS}</td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">

                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">S</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.S}</td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">M</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.M}</td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">

                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">L</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.L}</td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">XL</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.XL}</td>
                            </tr>
                            <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">XXL</td>
                              <td
                                class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{orderDetails.XXL}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <h1 className=' text-4xl m-4 text-center  font-bold'>
                Process
              </h1>

              <div className=' flex gap-x-2 gay-y-3 flex-wrap justify-between px-10'>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>knitting
                    </h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100
                    </h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.knittingstartDate}</p>
                      <p>End Data : {orderDetails.knittingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(0, orderDetails.knittingstartDate, orderDetails.knittingendDate)}/>
                  </div>

                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>DYEING</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.dyeingstartDate}</p>
                      <p>End Data : {orderDetails.dyeingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(1, orderDetails.dyeingstartDate, orderDetails.dyeingendDate)}/>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>CUTTING</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.cuttingstartDate}</p>
                      <p>End Data : {orderDetails.cuttingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(2, orderDetails.cuttingstartDate, orderDetails.cuttingendDate)}/>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>EMBELLISHMENT</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.emblishmentstartDate}</p>
                      <p>End Data : {orderDetails.emblishmentendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(3, orderDetails.emblishmentstartDate, orderDetails.emblishmentendDate)}/>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>SEWING</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.sewingstartDate}</p>
                      <p>End Data : {orderDetails.sewingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(4, orderDetails.sewingstartDate, orderDetails.sewingendDate)}/>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>FINISHING</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.finishingstartDate}</p>
                      <p>End Data : {orderDetails.finishingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(5, orderDetails.finishingstartDate, orderDetails.finishingendDate)}/>
                  </div>
                </div>

                <div className='w-1/3'>
                  <div className='shadow-lg py-12 px-12 '>
                    <h1 className='text-xl font-semibold'>PACKING</h1>
                    <div className="border-t border-2 border-black my-4"></div>
                    <h1 className='text-xl font-semibold text-gray-500'>100</h1>
                    <div className='mt-5 text-red-600'>
                      <p>Start Date : {orderDetails.packingstartDate}</p>
                      <p>End Data : {orderDetails.packingendDate}</p>
                    </div>
                    <CiEdit
                      className="w-5  mt-3 h-5 cursor-pointer"
                      onClick={() => edit(6, orderDetails.packingstartDate, orderDetails.packingendDate)}/>
                  </div>
                </div>

              </div>

            </div>
}
          </div>
        )}

      {model && <div
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-2xl max-h-full">

          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div
              className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit Order
              </h3>
              <button
                onClick={() => setmodel(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">

              <input
                type="text"
                value={startDate}
                onChange={handleStartDateChange}
                placeholder="Description (optional)"
                className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
              <input
                type="text"
                value={endDate}
                onChange={handleEndDateChange}
                placeholder="End Date (optional)"
                className="w-full border rounded-md px-3 py-2 shadow-sm mt-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>

            </div>

            <div
              className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleupdate}>Update</button>
            </div>
          </div>
        </div>
      </div>}
    </div>

  );

};

export default ProductDetails