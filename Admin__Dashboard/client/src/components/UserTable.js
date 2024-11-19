import React from "react";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import Loader from "./Loader";

const UserTable = ({ token, settoken }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("http://localhost:4000/api/users", {
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
    console.log("i am called");
    if (token) {
      fetchData();
    }
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = data?.filter(
    (user) =>
      user.username.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/api/users/${id}`, {
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
    }
  };

  const handleActive = async (id, status, admin) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/status/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            isActive: status,
            isAdmin: admin,
          }),
        }
      );
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
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdmin = async (id, status, admin) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/users/status/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "application/json",
          },
          method: "post",
          body: JSON.stringify({
            isActive: admin,
            isAdmin: status,
          }),
        }
      );
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
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <section className="py-1 bg-blueGray-50">
            <div className="w-full mb-12 xl:mb-0 px-4 mt-12">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <div className="rounded-t bg-gradient-to-r from-gray-400 to-gray-500 mb-0 px-4 py-3 border-b border-gray-200">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-blueGray-700 text-xl">
                        Users
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right flex items-center">
                      <input
                        className="bg-gray-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-sm"
                        type="search"
                        placeholder="Search Users"
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

                <div className="block w-full overflow-x-auto mt-5">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                      <tr>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-center">
                          User Name
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-center">
                          Email
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-center">
                          Phone
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-center">
                          Address
                        </th>
                        <th className="px-6 bg-gradient-to-r from-gray-400 to-gray-500 text-black align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {data &&
                        filteredData.map((data) => (
                          <tr key={data._id}>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {data.username}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                              <a href={`mailto:${data.email}`}>{data.email}</a>
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {data.phone}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              {data.address}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              <div className="flex">
                                <MdDelete
                                  onClick={() => handleDelete(data._id)}
                                  className="w-4 h-4 mx-1 cursor-pointer"
                                />{" "}
                                {data.isActive ? (
                                  <FaUserAltSlash
                                    className="w-4 h-4 mx-1 cursor-pointer"
                                    onClick={() =>
                                      handleActive(
                                        data._id,
                                        false,
                                        data._isAdmin
                                      )
                                    }
                                  />
                                ) : (
                                  <FaUserCheck
                                    className="w-4 h-4 mx-1 cursor-pointer"
                                    onClick={() =>
                                      handleActive(
                                        data._id,
                                        true,
                                        data._isAdmin
                                      )
                                    }
                                  />
                                )}
                                {data.isAdmin ? (
                                  <MdOutlineSupervisedUserCircle
                                    className="w-4 h-4 mx-1 text-yellow-600 cursor-pointer"
                                    onClick={() =>
                                      handleAdmin(
                                        data._id,
                                        false,
                                        data.isActive
                                      )
                                    }
                                  />
                                ) : (
                                  <MdSupervisedUserCircle
                                    className="w-4 h-4 mx-1 cursor-pointer"
                                    onClick={() =>
                                      handleAdmin(data._id, true, data.isActive)
                                    }
                                  />
                                )}
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
        </div>
      )}
    </div>
  );
};

export default UserTable;
