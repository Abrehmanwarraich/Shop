import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); // Initialize useHistory hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });
      console.log(response.data); // Handle success message

      // Redirect to homepage after successful login
      if (true) {
        navigate('/')
      }
    } catch (error: any) {
      console.error('Error logging in:', error.response.data); // Handle error message
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              This is fastest growing online shopping mart.
            </h1>
            <p className="leading-relaxed mt-4">
              First login and pick your order on some step. Because this is the most popular website.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Log in
            </h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={handleLogin} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Log in
            </button>
            <p className="text-xs text-gray-500 mt-3">
              If you are not already registered, please {" "}
              <Link to="/signup" className="text-blue-900 underline cursor-pointer">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
