import React, { useState } from 'react';

const FeedbackModal = ({ complaint, onClose, onSubmit }) => {
  const [msg, setMsg] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Add Feedback (ID: {complaint.id})</h3>
        <textarea
          className="w-full border border-gray-300 rounded p-2 mb-4"
          rows="4"
          placeholder="Write your feedback here..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => onSubmit(msg)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
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

export default FeedbackModal;
