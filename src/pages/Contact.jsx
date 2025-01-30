import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or email integration here
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-12 md:px-16 lg:px-24 mt-20">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-lg mb-8">
        Have questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
      </p>

      {/* Contact Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <p className="text-gray-700">16 ENE ikot Abasi Street,Uyo</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-blue-600 text-xl" />
            <p className="text-gray-700">+234 7081 41 6213</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-xl" />
            <p className="text-gray-700">victorumoren50@gmail.com</p>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126904.55004178812!2d7.024379!3d4.8155549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cdd0d4b10ad9%3A0xa82fda74ee9c53ea!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1638282246289"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4 w-full">
          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
