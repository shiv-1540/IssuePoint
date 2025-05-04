import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-64 flex flex-col justify-between p-6 sticky top-0">
      {/* Top section: Logo & Navigation */}
      <div className="space-y-6">
        <h1 className="text-3xl font-extrabold tracking-wide text-white text-center">
          <span className="text-red-500">I</span>ssue
          <span className="text-yellow-400">P</span>oint
        </h1>
        <h2 className="text-2xl font-bold text-yellow-400 text-center">Admin Panel</h2>

        <nav className="flex flex-col space-y-6 text-gray-300 text-center mt-8">
          <Link to="/admin/complaints" className="hover:text-white text-lg">
            📋 Track Complaints
          </Link>
          {/* Add more navigation links here if needed */}
          <Link to="/admin/users" className="hover:text-white text-lg">
            📋 Manage Users
          </Link>
        </nav>
      </div>

      {/* Bottom Logout Button */}
      <div className="text-center">
        <Link
          to="/login"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
