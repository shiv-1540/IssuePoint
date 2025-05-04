import React, { useState,useEffect } from 'react';
import ComplaintService from '../../services/ComplaintService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const ComplaintUser = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imgs, setImgs] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState(null);
  
  useEffect(() => { // Get user from localStorage
   const storedUser = localStorage.getItem('user'); 
   if (storedUser) { setUser(JSON.parse(storedUser)); } }, []);
  
   console.log("Hiii user on Complaint : ",user);
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const complaint = {
      userId: user.id,
      category,
      description,
      imgs,
      isPrivate,
      isAnonymous,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
  
    ComplaintService.createComplaint(complaint)
      .then(() => {
        // ✅ Reset form fields
        setCategory('');
        setDescription('');
        setImgs('');
        setIsPrivate(false);
        setIsAnonymous(false);
        setErrorMessage('');
        
        // ✅ Optional: show success toast here
        toast.success("Complaint submitted successfully!");

        // ✅ Navigate if needed
        navigate('/student/home');
      })
      .catch(err => setErrorMessage(err.message));
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 flex justify-center items-start">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6 border border-blue-200">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6 tracking-tight">
            📝 Submit a Complaint
        </h2>
    
        <form onSubmit={handleSubmit} className="space-y-4 text-sm font-medium text-gray-900">
    
            {/* Category */}
            <div>
            <label className="block mb-1 text-gray-800">Category</label>
            <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
                className="w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-gray-50"
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
            <div>
            <label className="block mb-1 text-gray-800">Description</label>
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows="3"
                required
                className="w-full border border-gray-800 rounded px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
            />
            </div>
    
            {/* Image URL */}
            <div>
            <label className="block mb-1 text-gray-800">Image URLs (comma-separated)</label>
            <input
                type="text"
                value={imgs}
                onChange={e => setImgs(e.target.value)}
                className="w-full border border-gray-900 rounded px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            </div>
    
            {/* Checkboxes */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 text-gray-800">
            <label className="inline-flex items-center">
                <input
                type="checkbox"
                checked={isPrivate}
                onChange={e => setIsPrivate(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="ml-2">Mark as Private</span>
            </label>
    
            <label className="inline-flex items-center mt-2 sm:mt-0">
                <input
                type="checkbox"
                checked={isAnonymous}
                onChange={e => setIsAnonymous(e.target.checked)}
                className="form-checkbox h-4 w-4 text-gray-600"
                />
                <span className="ml-2">Submit Anonymously</span>
            </label>
            </div>
    
            {/* Submit */}
            <div className="text-center mt-4">
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
                Submit Complaint
            </button>
            </div>
    
            {/* Error Message */}
            {errorMessage && (
            <div className="text-center text-red-500 text-sm mt-2">
                {errorMessage}
            </div>
            )}
        </form>
        </div>
    </div>
    

  );
};

export default ComplaintUser;
