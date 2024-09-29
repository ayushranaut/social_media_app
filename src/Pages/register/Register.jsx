import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => console.log("Registered Successfully", res))
      .catch((err) => console.log("Error", err));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-md shadow-xl">
        <h1 className="text-3xl block text-center font-semibold">
          <i className="fa-solid fa-user"></i> Register
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-3">
            <label htmlFor="name" className="block text-base mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border w-full text-base px-2 py-1 focus:outline-none"
              placeholder="Enter your name..."
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email ID
            </label>
            <input
              type="text"
              name="email"
              className="border w-full text-base px-2 py-1 focus:outline-none"
              placeholder="Enter your Email ID..."
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-red-600 focus:outline-none"
            >
              <i className="fa-solid fa-right-to-bracket"></i> Register
            </button>
          </div>
        </form>
        <div className="mt-3 flex justify-center">
          <NavLink to="/Login" className="text-red-700 font-semibold">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;