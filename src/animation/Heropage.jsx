import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const AnimatedHero = () => {
  return (
    <div className="min-h-screen bg-pink-900 text-white flex flex-col items-center justify-center gap-10 p-5">
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

      
     
     
    </div>
  );
};

export default AnimatedHero;
