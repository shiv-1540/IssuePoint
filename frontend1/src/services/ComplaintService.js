import axios from 'axios';

const COMPLAINT_API_BASE_URL = "http://localhost:9080/api/complaint";

class ComplaintService {

    getComplaints() {
        return axios.get(COMPLAINT_API_BASE_URL);
    }

    createComplaint(complaint) {
        return axios.post(COMPLAINT_API_BASE_URL, complaint);
    }

    getComplaintById(complaintId) {
        return axios.get(`${COMPLAINT_API_BASE_URL}/${complaintId}`);
    }

    updateComplaint(complaint, complaintId) {
        return axios.put(`${COMPLAINT_API_BASE_URL}/${complaintId}`, complaint);
    }

    deleteComplaint(complaintId) {
        return axios.delete(`${COMPLAINT_API_BASE_URL}/${complaintId}`);
    }

    // ✅ New method to update status
    updateStatus(id, status) {
        return axios.put(`${COMPLAINT_API_BASE_URL}/${id}/status`, { status });
    }

  // ✅ Properly sends both id and FeedMsg in the request body
    updateFeedback(id, feedMsg) {
        return axios.put(`${COMPLAINT_API_BASE_URL}/feedback`, {
            id: id,
            feedMsg: feedMsg
        });
   }

}

export default new ComplaintService();
