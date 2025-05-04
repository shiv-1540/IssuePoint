import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import UserService from '../services/UserService';

const CreateUserComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (id && id !== '_add') {
      UserService.getUserById(id).then((res) => {
        const { name, email, role } = res.data;
        setFormData({ name, email, role, password: '' });
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!id || id === '_add') {
        await UserService.createUser(formData);
        navigate('/login');
      } else {
        await UserService.updateUser(formData, id);
        navigate('/login');
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 to-black text-white">

      {/* Left Image */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center bg-gray-800">
        <img src="/imgs/register.png" alt="Register" className="max-w-full h-auto rounded-md shadow-lg" />
      </div>

      {/* Right Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-700">
          <h3 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
            {(!id || id === '_add') ? 'Create Account' : 'Update Profile'}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition shadow-md"
            >
              {(!id || id === '_add') ? 'Register' : 'Update'}
            </button>

            <p className="text-sm text-center text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-400 hover:underline font-medium">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserComponent;
