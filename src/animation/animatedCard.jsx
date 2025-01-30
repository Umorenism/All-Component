import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedCard = ({ image, title, des }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-auto rounded-2xl shadow-lg cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt="Card Image"
        className="w-full h-[200px] object-cover rounded-md"
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-4 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-center">{des}</p>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
