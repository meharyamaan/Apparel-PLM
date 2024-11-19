import { useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

const AddUser = ({ token, settoken }) => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    console.log(newEmail);
  };

  const handlePassChange = (event) => {
    const newPass = event.target.value;
    setPass(newPass);
    console.log(newPass);
  };
  const handleUserNameChange = (event) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
    console.log(userName);
  };
  const handleConfirmPassChange = (event) => {
    const confirmPass = event.target.value;
    setConfirmPass(confirmPass);
    console.log(confirmPass);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();
    if (pass !== confirmPass) {
      setError("Passwords do not match");
      toast("Password Not Match", {
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
      return;
    }

    const response = await fetch("http://localhost:4000/api/users", {
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: pass,
        username: userName,
        phone: "${countryCode}${phoneNumber}",
      }),
    });
    const json = await response.json();

    if (response.ok) {
      toast("Account Created Succesfully ", {
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

      setError("");
    } else {
      toast.error("${json.error}", {
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

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value.replace(/[^0-9]/g, "");
    if (newPhoneNumber.length <= 10) {
      // Ensure the length is 10 or less
      setPhoneNumber(newPhoneNumber);
    }
  };

  const handleCountryCodeChange = (event) => {
    const newCountryCode = event.target.value;
    setCountryCode(newCountryCode);
    console.log(countryCode);
  };

  return (
    <>
      <section className="relative flex justify-center  lg:items-center">
        <div className="w-full px-2 py-12   sm:py-16 ">
          <div className="max-w-lg mx-auto">
            <form
              className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl "
              onSubmit={handleSubmitSignUp}
            >
              <h1 className="text-center justify-center font-bold text-2xl mb-10">
                Admin Sigup of Apparelpml
              </h1>
              <p className="text-lg font-medium">Sign up </p>

              <div>
                <label htmlFor="UserName" className="text-sm font-medium ">
                  Username
                </label>
                <div className="mb-2">
                  <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                    id="Username"
                    name="Username"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter Valid email"
                    required
                  />
                </div>
                <label htmlFor="Email" className="text-sm font-medium">
                  Email & Contact
                </label>

                <div className="relative mt-1">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    id="Email"
                    name="Email"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter Valid email"
                    required
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <div className="flex ">
                  <label htmlFor="Password" className="text-sm font-medium">
                    Password
                  </label>
                </div>

                <div className="relative mt-1">
                  <input
                    type={show ? "text" : "Password"}
                    value={pass}
                    onChange={handlePassChange}
                    id="Password"
                    name="Password"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter password"
                    required
                  />

                  <span
                    className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex ">
                  <label htmlFor="Password" className="text-sm font-medium">
                    Confirm Password
                  </label>
                </div>

                <div className="relative mt-1">
                  <input
                    value={confirmPass}
                    onChange={handleConfirmPassChange}
                    type={showPass ? "text" : "Password"}
                    id="Confirmpassword"
                    name="Confirmpassword"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter password"
                    required
                  />

                  <span
                    className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer"
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
                <div>
                  <label htmlFor="PhoneNumber" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <div className="relative mt-1">
                    <div className="flex">
                      <select
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        className="w-1/3 p-4 pr-2 text-sm border-gray-200 rounded-lg shadow-sm mr-2"
                      >
                        <option value="+1">+1</option>
                        <option value="+92">+92</option>
                        {/* Add more country codes as needed */}
                      </select>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        id="PhoneNumber"
                        name="PhoneNumber"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                        placeholder="Enter Phone Number"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddUser;
