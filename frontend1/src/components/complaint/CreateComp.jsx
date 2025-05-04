import React, { useState } from 'react';
import ComplaintService from '../../services/ComplaintService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const AddComplaintComponent = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imgs, setImgs] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const complaint = {
      category,
      description,
      imgs,
      isPrivate,
      isAnonymous,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    ComplaintService.createComplaint(complaint)
      .then(() =>      // ✅ Optional: show success toast here
      toast.success("Complaint submitted successfully!"))
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <div className="d-flex min-h-screen bg-gray-600 py-10 px-4">
      <div className=' w-1/2'>
          <img src="./imgs/complaint.png"/>
      </div>
      <div className="max-w-1/2 mx-auto bg-gray-800 shadow-lg rounded-lg p-10">
        <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">Submit a Complaint</h2>
        <form onSubmit={handleSubmit}>

          {/* Category */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Category</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              className="w-full border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Select Category --</option>
              <option value="Canteen">Canteen</option>
              <option value="Academic">Academic</option>
              <option value="Internet & IT">Internet & IT</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Teachers">Teachers</option>
              <option value="Ragging">Ragging</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              className="w-full border border-gray-800 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Image URLs */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-200 mb-2">Image URLs (comma-separated)</label>
            <input
              type="text"
              value={imgs}
              onChange={e => setImgs(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={e => setIsPrivate(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-200">Mark as Private</span>
            </label>

            <label className="inline-flex items-center mt-2 md:mt-0">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={e => setIsAnonymous(e.target.checked)}
                className="form-checkbox h-5 w-5 text-indigo-200"
              />
              <span className="ml-2 text-gray-200">Submit Anonymously</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md shadow transition duration-200"
            >
              Submit Complaint
            </button>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-4 text-red-600 text-sm font-medium text-center">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddComplaintComponent;
