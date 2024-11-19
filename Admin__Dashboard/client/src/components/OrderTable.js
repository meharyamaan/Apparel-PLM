import React from "react";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { Bounce } from "react-toastify";

const OrderTable = ({ token, settoken }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [model, setmodel] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedID, setselectedID] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("http://localhost:4000/api/orders", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data?.filter(
    (user) =>
      user.title.toLowerCase().includes(searchTerm) ||
      user.description.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/api/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
      method: "delete",
    });
    const json = await response.json();

    if (response.ok) {
      toast(`${json.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      fetchData();
    } else {
      toast.error(`${json.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleEdit = async (id, i) => {
    setDescription(data[i].description);
    setSelectedStatus(data[i].status);
    setEndDate(data[i].endDate.slice(0, 10));
    setselectedID(data[i]._id);
    setmodel(true);
  };

  const handleupdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/orders/${selectedID}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "application/json",
          },
          method: "put",
          body: JSON.stringify({
            status: selectedStatus,
            endDate: endDate,
            description: description,
          }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        setmodel(false);
        toast(`${json.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <section className="py-1 bg-blueGray-50">
            <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-12">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <div className="rounded-t bg-gradient-to-r from-gray-400 to-gray-500 mb-0 px-4 py-3 border-b border-gray-200">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-blueGray-700 text-xl">
                        Orders
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right flex items-center">
                      <input
                        className="bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-sm"
                        type="search"
                        placeholder="Search Order"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <button
                        className="ml-2 bg-black text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={fetchData}
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Title
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Mail
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Start Date
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          End Date
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Status
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Description
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Products
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data &&
                        filteredData.map((data, i) => (
                          <tr key={data._id}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              <Link to={`/order/${data._id}`}>
                                {data.title}
                              </Link>
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {data.email ? data.email : "-"}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              {data.createdAt.slice(0, 10)}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {data.endDate.slice(0, 10)}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              {data.status}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              {data.description}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              {data.products.length}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex">
                                <MdDelete
                                  onClick={() => handleDelete(data._id)}
                                  className="w-4 h-4 mx-1 cursor-pointer"
                                />

                                <MdEdit
                                  className="w-4 h-4 mx-1 cursor-pointer"
                                  onClick={() => handleEdit(data._id, i)}
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {model && (
            <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Edit Order
                    </h3>
                    <button
                      onClick={() => setmodel(false)}
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="p-4 md:p-5 space-y-4">
                    <select
                      value={selectedStatus}
                      onChange={handleStatusChange}
                      className="border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="deleted">Deleted</option>
                      <option value="active">Active</option>
                    </select>

                    <input
                      type="text"
                      value={description}
                      onChange={handleDescriptionChange}
                      placeholder="Description (optional)"
                      className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <input
                      type="text"
                      value={endDate}
                      onChange={handleEndDateChange}
                      placeholder="End Date (optional)"
                      className="w-full border rounded-md px-3 py-2 shadow-sm mt-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="default-modal"
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleupdate}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderTable;
