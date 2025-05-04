import React, { useEffect, useState } from 'react';
import ComplaintService from '../../services/ComplaintService';
import UserNavbar from './UserNavbar';
import {
    ShieldExclamationIcon,
    ClockIcon,
    EyeSlashIcon,
    UserIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    ChatBubbleOvalLeftEllipsisIcon
  } from '@heroicons/react/24/outline';


const TrackComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
       console.log("User mil gyya: " ,parsedUser);
      ComplaintService.getComplaints()
        .then(res => {
          const userComplaints = res.data.filter(c => c.userId === parsedUser.id);
          console.log("Users ke complaints: ",userComplaints);
          setComplaints(userComplaints);
        })
        .catch(err => console.error('Error fetching complaints:', err));
    }
  }, []);

  if (!user) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-white to-blue-50">
      <UserNavbar />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-extrabold text-center text-blue-900 mb-10">🧾 Your Complaints</h2>

        {complaints.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">You haven't submitted any complaints yet.</p>
        ) : (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {complaints.map(c => (
             <div
             key={c.id}
             className="bg-white border border-blue-300 shadow-md rounded-xl p-5 hover:shadow-lg transition-all duration-300"
           >
             <div className="flex justify-between items-center mb-3">
               <h4 className="text-lg font-semibold text-blue-800 flex items-center gap-2">
                 <ShieldExclamationIcon className="h-5 w-5 text-blue-500" />
                 {c.category}
               </h4>
               <span
                 className={`text-xs px-3 py-1 rounded-full font-semibold ${
                   c.status === 'Resolved'
                     ? 'bg-green-100 text-green-700'
                     : c.status === 'In Progress'
                     ? 'bg-yellow-100 text-yellow-700'
                     : 'bg-red-100 text-red-700'
                 }`}
               >
                 {c.status}
               </span>
             </div>
           
             <p className="text-gray-800 font-medium text-sm mb-3 line-clamp-4">{c.description}</p>
           
             {c.imgs && (
               <img
                 src={c.imgs}
                 alt="Proof"
                 className="w-full h-32 object-cover rounded border border-gray-300 mb-3"
               />
             )}
           
             <div className="text-xs text-gray-600 space-y-1">
               <div className="flex items-center gap-2">
                 <ClockIcon className="h-4 w-4 text-gray-500" />
                 <span>{new Date(c.createdAt).toLocaleString()}</span>
               </div>
               <div className="flex items-center gap-2">
                 <EyeSlashIcon className="h-4 w-4 text-gray-500" />
                 <span>Private: {c.isPrivate ? 'Yes' : 'No'}</span>
               </div>
               <div className="flex items-center gap-2">
                 <UserIcon className="h-4 w-4 text-gray-500" />
                 <span>Anonymous: {c.isAnonymous ? 'Yes' : 'No'}</span>
               </div>
             </div>
           
             <div className="flex justify-between items-center text-sm mt-3 text-gray-500">
               <span className="flex items-center gap-1">
                 <HandThumbUpIcon className="h-4 w-4 text-green-500" />
                 {c.noOfLikes}
               </span>
               <span className="flex items-center gap-1">
                 <HandThumbDownIcon className="h-4 w-4 text-red-500" />
                 {c.noOfDislikes}
               </span>
             </div>
           
             {c.feedMsg && (
               <div className="mt-4 flex items-start gap-2 bg-blue-50 border border-blue-300 p-3 rounded text-sm text-blue-900 font-semibold">
                 <strong>Admin Msg:</strong>
                 <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-blue-600" />
                  <span>{c.feedMsg}</span>
               </div>
             )}
           </div>
            
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackComplaints;
