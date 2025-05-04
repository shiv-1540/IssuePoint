import React, { useEffect, useState } from 'react';
import ComplaintService from '../../services/ComplaintService';
import FeedbackModal from './FeedbackModal';
import ViewModal from './ViewModal';

const AdminComplaintsTable = () => {
  const [complaints, setComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    ComplaintService.getComplaints()
      .then(res => setComplaints(res.data))
      .catch(err => console.error('Error fetching complaints:', err));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    ComplaintService.updateStatus(id, newStatus)
      .then(() => {
        setComplaints(prev =>
          prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
        );
      });
  };

  const openFeedback = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };
  const openComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setShowViewModal(true);
  };


  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Complaints Overview</h2>
      <table className="w-full table-auto border border-gray-300 rounded overflow-hidden shadow-md">
        <thead className="bg-gray-600 text-1xl text-yellow-500 border border-gray-300">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Category</th>
            <th className="p-3">Status</th>
            <th className="p-3">Description</th>
            <th className="p-3 pl-4 text-start">Actions</th>
            <th className='p-3 pl-4 text-start'>View </th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{c.id}</td>
              <td className="p-3">{c.category}</td>
              <td className="p-3">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={c.status}
                  onChange={(e) => handleStatusChange(c.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Resolved</option>
                </select>
              </td>
              <td className="p-3 max-w-xs truncate">{c.description}</td>
              <td className="p-3">
                <button
                  onClick={() => openFeedback(c)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                >
                Feedback
                </button>
              </td>

              <td className="p-3">
                <button
                  onClick={() => openComplaint(c)}
                  className="bg-green-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
                >
                  view details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedComplaint && (
        <FeedbackModal
          complaint={selectedComplaint}
          onClose={() => setShowModal(false)}
          onSubmit={(msg) => {
            console.log("Msg from feedback modal",msg);
            ComplaintService.updateFeedback(selectedComplaint.id, msg)
              .then(() => {
                setComplaints(prev =>
                  prev.map(c =>
                    c.id === selectedComplaint.id ? { ...c, feed_msg: msg } : c
                  )
                );
                setShowModal(false);
              });
          }}
        />
      )}

      {showViewModal && selectedComplaint && (
        <ViewModal
          complaint={selectedComplaint}
          onClose={() => setShowViewModal(false)}
        />
      )}
    </div>
  );
};

export default AdminComplaintsTable;
