import { motion } from "framer-motion";


const AnimatedCard = () => {
  return (
    <div className="min-h-screen bg-blue-500 text-white flex flex-col items-center justify-center gap-10 p-5">

      {/* Animated Card */}
      <motion.div
        className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-sm text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Awesome Card</h2>
        <p className="text-gray-400">This is an animated card with hover effects.</p>
      </motion.div>


     
    </div>
  );
};

export default AnimatedCard;
