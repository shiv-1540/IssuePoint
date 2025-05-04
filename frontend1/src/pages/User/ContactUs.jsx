import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import UserNavbar from "./UserNavbar";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-300">
      <UserNavbar />

      <div className="max-w-6xl mx-auto p-12 mt-2 bg-white  shadow-lg rounded-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">+91 8007001540</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">IssuePoint03@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-lg text-gray-700">
                MIT Academy of Engineering, Pune, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl text-start font-semibold text-gray-800 mb-2">Follow us</h3>
            <div className="flex space-x-6 text-4xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Map or Footer Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} IssuePoint. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
