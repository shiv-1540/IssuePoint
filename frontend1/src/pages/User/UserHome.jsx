import React, { useEffect, useState } from 'react';
import UserNavbar from './UserNavbar';
import ComplaintService from '../../services/ComplaintService';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const UserHome = () => {
  const [complaints, setComplaints] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));

    ComplaintService.getComplaints()
      .then(res => setComplaints(res.data))
      .catch(err => console.error('Error fetching complaints:', err));
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <UserNavbar />

      <div className="bg-gradient-to-br from-white to-blue-50 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Left Panel */}
          <div className="w-full md:col-span-1 bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-400 h-fit sticky top-28 self-start">
            <h2 className="text-2xl font-extrabold text-blue-900 mb-2 leading-tight">
              👋 Hello, {user.name}!
            </h2>
            <p className="text-blue-800 text-base font-medium mb-2">
              Welcome back to <span className="text-yellow-500 font-bold">IssuePoint</span>
            </p>
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 text-blue-900">
              <h3 className="text-lg font-semibold mb-2">🧾 Your Info</h3>
              <p className="text-sm"><span className="font-semibold">Name:</span> {user.name}</p>
              <p className="text-sm"><span className="font-semibold">Role:</span> {user.role}</p>
              <p className="text-sm"><span className="font-semibold">Email:</span> {user.email}</p>
            </div>
          </div>

          {/* Right Panel - Complaint List */}
          <div className="w-full md:col-span-2 bg-white shadow-lg rounded-xl p-6 border-l-4 border-indigo-400 max-h-[75vh] overflow-y-auto space-y-6">
            <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">📋 All Complaints</h2>

            {complaints.length === 0 ? (
              <p className="text-gray-600 text-center">No complaints found.</p>
            ) : (
              complaints.map(c => (
                <div
                  key={c.id}
                  className="bg-blue-50 border border-blue-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <p className="text-xs text-gray-500 mb-1">Category: <span className="font-semibold text-blue-800">{c.category}</span></p>
                      <p className="text-base text-gray-800 font-medium">{c.description}</p>
                      {c.imgs && (
                        <div className="mt-3">
                          <img src={c.imgs} alt="Proof" className="w-full max-w-sm h-40 object-cover rounded-md border border-gray-300" />
                        </div>
                      )}
                    </div>

                    <div className="text-right ml-4">
                      <p className="text-xs text-gray-500">{c.isAnonymous ? 'Anonymous' : `User ID: ${c.userId}`}</p>
                      <p className={`text-xs font-semibold mt-1 ${c.status === 'Resolved' ? 'text-green-600' : 'text-yellow-600'}`}>
                        {c.status}
                      </p>
                    </div>
                  </div>

                  {/* Reaction Buttons */}
                  <div className="mt-4 flex justify-end items-center space-x-4 text-gray-600 text-sm">
                    <button className="flex items-center hover:text-blue-600 transition">
                      <AiOutlineLike className="mr-1" /> {c.noOfLikes ?? 0}
                    </button>
                    <button className="flex items-center hover:text-red-600 transition">
                      <AiOutlineDislike className="mr-1" /> {c.noOfDislikes ?? 0}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
