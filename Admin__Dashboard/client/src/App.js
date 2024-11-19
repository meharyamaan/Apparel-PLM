import { useState } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandingPage";
import OrderForm from "./components/OrderForm";
import UserTable from "./components/UserTable";
import OrderUpdate from "./components/OrderUpdate";
import Login from "./components/Login";
import OrderTable from "./components/OrderTable";
import Dash from "./components/Dash";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import OrderDetails from "./components/OrderDetails";
import ProductTable from "./components/ProductTable";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [token, setToken] = useState(null);
  const [loginUserData, setLoginUserData] = useState();

  return (
    <section className="App">
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}

          <Route
            path="login"
            element={
              <Login setToken={setToken} setLoginUserData={setLoginUserData} />
            }
          />

          {token !== null && (
            <>
              <Route
                index
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <Home />
                    </div>
                  </div>
                }
              />
              <Route
                path="usertable"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <UserTable token={token} />
                    </div>
                  </div>
                }
              />
              <Route
                path="adduser"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <AddUser token={token} />
                    </div>
                  </div>
                }
              />
              <Route
                path="ordertable"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <OrderTable token={token} />
                    </div>
                  </div>
                }
              />
              <Route
                path="addorder"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <OrderForm token={token} />
                    </div>
                  </div>
                }
              />

              <Route
                path="updateorder"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <OrderUpdate token={token} />
                    </div>
                  </div>
                }
              />

              <Route
                path="producttable"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <ProductTable token={token} />
                    </div>
                  </div>
                }
              />
              <Route
                path="order/:id"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <OrderDetails token={token} />
                    </div>
                  </div>
                }
              />
              <Route
                path="product/:id"
                element={
                  <div className=" flex flex-row  overflow-y-scroll ">
                    <Dash setToken={setToken} loginUserData={loginUserData} />{" "}
                    <div className="w-full overflow-y-scroll h-screen">
                      <ProductDetails token={token} />
                    </div>
                  </div>
                }
              />
            </>
          )}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
