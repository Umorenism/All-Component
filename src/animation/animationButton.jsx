import { motion } from "framer-motion";
import { useState } from "react";
import Model from "../component/Model";

const AnimatedButton = ({title}) => {
   const [showModel,setShowModel]=useState(false)
  return (
    <div >

      {/* Animated Button */}
      <motion.button
      onClick={()=>setShowModel(true)}
        className="bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </motion.button>
      {showModel && <Model onClose={()=>setShowModel(false)} title="SEND US A MESSAGE" des="Every information will be treated immediately.." btnText="send"/>}
     
    </div>
  );
};

export default AnimatedButton;
