import React from 'react';
import AdminComplaintsTable from './AdminComplaintsTable';
import AdminSidebar from './AdminSidebar';
import ListUserComponent from '../../components/ListUserComponent';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
     <AdminSidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-extrabold mb-5 text-center text-gray-800 bg-yellow-500 p-3">All Complaints</h1>
        <AdminComplaintsTable />

      </main>
    </div>
  );
};

export default AdminDashboard;
