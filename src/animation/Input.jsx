import { motion } from "framer-motion";


const AnimatedInput = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-10 p-5">

      {/* Animated Input Field */}
      <motion.input
        type="text"
        placeholder="Enter your email"
        className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md text-white"
        whileFocus={{ scale: 1.05 }}
      />

     
    </div>
  );
};

export default AnimatedInput;
