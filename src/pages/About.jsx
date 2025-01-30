import pic from "../assets/founder.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-6 mt-20 flex flex-col items-center w-full max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 relative">
        ABOUT US
        <span className="block w-[20%] h-1 bg-blue-600 mx-auto mt-2 rounded-full transition-all duration-300"></span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 w-full">
        {/* Image Section with Hover Overlay */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          {/* Image */}
          <img
            src={pic}
            alt="Founder"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Overlay Content */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold mb-2">BUILDING HUMAN CAPITAL</h3>
            <p className="text-sm text-center">Through Transformation and Innovation</p>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">DEAL DRIVE</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur nam fuga sed iusto sequi, sit aliquid reiciendis, quo odio quas laboriosam eligendi nemo dolor fugiat nulla mollitia ab tempora!
          </p>
          <p className="text-xl text-orange-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur nam fuga sed iusto sequi, sit aliquid reiciendis, quo odio quas laboriosam eligendi nemo dolor fugiat nulla mollitia ab tempora!
          </p>
          <p className="text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aspernatur nam fuga sed iusto sequi, sit aliquid reiciendis, quo odio quas laboriosam eligendi nemo dolor fugiat nulla mollitia ab tempora!
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 md:w-1/3 w-full mt-4 px-6 py-3 text-white font-bold rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md"
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
