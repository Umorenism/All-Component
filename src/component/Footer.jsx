export const Footer = () => (
  <footer className="w-full bg-gray-800 text-white py-8 mt-10">
    <div className="container mx-auto px-6 md:px-12">
      {/* Footer Top Section: Message Input and Footer Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* Contact Form Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <input
            type="text"
            placeholder="Your message"
            className="w-full p-3 text-gray-800 rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
            Send Message
          </button>
        </div>

        {/* Footer Information Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section: Copyright */}
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
