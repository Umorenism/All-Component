import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedButton from "./animationButton";
import About from "../pages/About";
import Achievement from "../pages/Achievement";
import Mission from "../pages/Mission";
import { Footer } from "../component/Footer";

const AnimatedHero = () => {
  return (
    <>
    <div className="w-full min-h-[600px] bg-cover bg-center flex flex-col items-center justify-center text-center text-white bg-img">
      {/* Hero Section with Typing Effect */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              "WELCOME TO RT.HON.EMMANUEL UKONG",
              1000,
              " AKA Mackay",
              1000,
              "A leader with a golden heart",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </motion.div>
      <p className="text-xl mb-4 text-white">A man who has transform boys to men!</p>
       <AnimatedButton  title="CONTACT ME"/>  
    </div>
    <hr />
    <About/>
    <hr />
    <Mission/>
    <hr />
    <Achievement/>
    <hr />
   <Footer/>
   </>
  );
};

export default AnimatedHero;
