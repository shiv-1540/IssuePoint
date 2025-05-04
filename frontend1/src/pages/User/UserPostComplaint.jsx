import React, { useState, useEffect } from "react";
import UserNavbar from "./UserNavbar";
import ComplaintUser from "../../components/complaint/CreateCompUser";

function UserPostComplaint() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) return <p className="text-center py-10 text-lg font-medium text-gray-600">Loading...</p>;

  return (
    <div className="h-screen overflow-hidden">
    <UserNavbar />
  
    <div className=" bg-gradient-to-br from-white to-blue-50 px-6 py-8 ">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row gap-2">
  
        {/* Left Panel - 1/3 */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-xl p-6 border-l-4 border-yellow-400 flex flex-col gap-8 justify-between h-fit">

        {/* Greeting Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-blue-900 leading-snug">
            👋 Hello, {user.name}!
          </h2>
          <p className="text-blue-800 text-base font-medium">
            Welcome to <span className="text-yellow-500 font-bold">IssuePoint</span>
          </p>
          <p className="text-sm text-blue-700 leading-relaxed">
            Use this space to raise your concerns, track progress, and help us improve your experience.
          </p>
        </div>

      {/* User Info Card */}
      <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-2 text-blue-900 space-y-1">
        <h3 className="text-lg font-semibold mb-1">🧾 Your Info</h3>
        <p className="text-sm"><span className="font-semibold">Name:</span> {user.name}</p>
        <p className="text-sm"><span className="font-semibold">Role:</span> {user.role}</p>
        <p className="text-sm"><span className="font-semibold">Email:</span> {user.email}</p>
      </div>

      {/* Footer Message */}
      <div className="pt-2 text-center">
        <p className="text-yellow-500 font-semibold italic">
          🚀 Let’s make your voice heard!
        </p>
      </div>

      </div>

        {/* Right Panel - 2/3 */}
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-xl p-3 border-l-4 border-indigo-400 flex flex-col justify-start">
          {/* <h2 className="text-2xl font-bold text-blue-900 mb-2 text-center">
            📝 Submit a Complaint
          </h2> */}
          <p className="text-center font-bold text-md text-gray-700 mb-1">
            Share your issue with us. <br/> You can choose to remain anonymous and track your complaint later.
          </p>
          <div className=" overflow-auto">
            <ComplaintUser />
          </div>
        </div>
  
      </div>
    </div>
  </div>
  
    
  
  );
}

export default UserPostComplaint;
