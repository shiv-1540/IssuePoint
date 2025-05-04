import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user,setUser]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post('http://localhost:9080/api/auth/login', {
                email,
                password
            });
    
            const loggedInUser = res.data.user;
            console.log("User login success:", loggedInUser);
    
            setUser(loggedInUser); // ✅ will update state for future renders
            localStorage.setItem('user', JSON.stringify(loggedInUser)); // ✅ store directly
            console.log("Apana User : ",loggedInUser);
            // ✅ use loggedInUser directly instead of user from state
            if (loggedInUser.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/student/home');
            }
    
        } catch (err) {
            setErrorMessage(err.response?.data || 'Login failed');
        }
    };
    
   

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="max-w-5xl w-full bg-gray-800 shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row ">

        {/* Left Image Section */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gray-700">
          <img src="/imgs/login.png" alt="Login" className="w-full  object-cover rounded-l-lg" />
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full p-10 text-white border border-gray-700">
          <h3 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Welcome Back</h3>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-900 border border-gray-600 text-white px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-center text-sm font-medium">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
            >
              Login
            </button>

            {/* Register Redirect */}
            <p className="text-sm text-center text-gray-400 mt-4">
              Don’t have an account?{' '}
              <Link to="/register" className="text-indigo-400 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default LoginComponent;
