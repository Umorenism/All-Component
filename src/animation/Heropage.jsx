import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const AnimatedComponents = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-10 p-5">
      {/* Hero Section with Typing Effect */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">
          <TypeAnimation
            sequence={[
              "Welcome to Our Platform",
              1000,
              "Discover Amazing Features",
              1000,
              "Join Us Today",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </motion.div>

      {/* Animated Card */}
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-sm text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Awesome Card</h2>
        <p className="text-gray-400">This is an animated card with hover effects.</p>
      </motion.div>

      {/* Animated Input Field */}
      <motion.input
        type="text"
        placeholder="Enter your email"
        className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md text-white"
        whileFocus={{ scale: 1.05 }}
      />

      {/* Animated Button */}
      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default AnimatedComponents;
