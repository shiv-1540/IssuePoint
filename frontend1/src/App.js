import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import CreateComplaintComponent from './components/complaint/CreateComp';
import CreateUserWrapper from './components/CreateUserWrap';
import LoginComponent from './components/Forms/LoginComponent';
import UserHome from './pages/User/UserHome';
import ProtectedRoute from './context/ProtectedRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';

import UserNavbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import { Toaster } from 'react-hot-toast';
import UserPostComplaint from './pages/User/UserPostComplaint';
import TrackComplaints from './pages/User/TrackComplaints';
import ContactUs from './pages/User/ContactUs';

function App() {
  return (
    <div>
      <Toaster />
      <Router>
        {/* <UserNavbar /> */}
      
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<CreateUserWrapper />} />

            <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

            <Route path="/admin/dashboard" element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                </ProtectedRoute>
            } />
             <Route path="/admin/complaints" element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                </ProtectedRoute>
            } />

          <Route path="/student/home" element={
                <ProtectedRoute allowedRoles={['student','staff']}>
                    <UserHome />
                </ProtectedRoute>
          } />

          <Route path="/student/post" element={
                <ProtectedRoute allowedRoles={['student','staff']}>
                    <UserPostComplaint />
                </ProtectedRoute>
          } />
          <Route path="/student/my-complaints" element={
                <ProtectedRoute allowedRoles={['student','staff']}>
                    <TrackComplaints />
                </ProtectedRoute>
          } />

            <Route path="/admin/users" element={<ListUserComponent />} />
            {/* <Route path="/users" element={<ListUserComponent />} /> */}
            <Route path="/add-user/:id" element={<CreateUserComponent />} />
            <Route path="/view-user/:id" element={<ViewUserComponent />} />

            {/* Complaint Routes */}
            <Route path="/complaints" element={<CreateComplaintComponent />} />
            <Route path="/contactus" element={<ContactUs/>}/>
          </Routes>
       
        
      </Router>
    </div>
  );
}

export default App;
