import React, { useState } from 'react';
import {
  ShieldExclamationIcon,
  ClockIcon,
  EyeSlashIcon,
  UserIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline';

const ViewModal = ({ complaint, onClose}) => {
  const [msg, setMsg] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50   flex justify-center items-center z-50">
      <div className=" border border-4 border-gray-500 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Complaint Details (ID: {complaint.id})</h3>
        <strong>Description: </strong>
        <p>{complaint.description}</p>
        
        <strong>Imgs: </strong>
        
        {complaint.imgs && (
               <img
                 src={complaint.imgs}
                 alt="Proof"
                 className="w-full h-32 object-cover rounded border border-gray-300 mb-3"
               />
             )}

            <div className="flex items-center gap-2">
                 <EyeSlashIcon className="h-4 w-4 text-gray-500" />
                 <span>Private: {complaint.isPrivate ? 'Yes' : 'No'}</span>
               </div>
               <div className="flex items-center gap-2">
                 <UserIcon className="h-4 w-4 text-gray-500" />
                 <span>Anonymous: {complaint.isAnonymous ? 'Yes' : 'No'}</span>
               </div>
          
        {/* <textarea
          className="w-full border border-gray-300 rounded p-2 mb-4"
          rows="4"
          placeholder="Write your feedback here..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        /> */}
        <div className="flex justify-end space-x-3">
          
          <button
            onClick={onClose}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
