import { motion } from "framer-motion";


const AnimatedButton = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-10 p-5">

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

export default AnimatedButton;
