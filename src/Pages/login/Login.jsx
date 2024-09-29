import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [data, setData] = useState({
    username: '',
    email: '',
  });

  const PostData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((res) => console.log("Success"))
      .catch((err) => console.log("Error"));
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-96 p-6 rounded-md shadow-xl">
          <h1 className="text-3xl block text-center font-semibold">
            <i className="fa-solid fa-user"></i> Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label htmlFor="username" className="block text-base mb-2">Username</label>
              <input
                type="text"
                name="username"
                className="border w-full text-base px-2 py-1 focus:outline-none"
                placeholder="Enter your Username..."
                value={data.username}
                onChange={PostData}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">Email</label>
              <input
                type="text"
                name="email"
                className="border w-full text-base px-2 py-1 focus:outline-none"
                placeholder="Enter your Email..."
                value={data.email}
                onChange={PostData}
              />
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="border-2 border-red-700 bg-red-700 text-white py-1 w-full rounded-md hover:bg-red-600 focus:outline-none"
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>
            </div>
          </form>
          <div className="mt-3 flex justify-center">
            <NavLink to="/Register" className="text-red-700 font-semibold">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;