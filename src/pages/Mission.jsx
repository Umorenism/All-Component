import AnimatedCard from "../animation/animatedCard";
import pic from "../assets/founder.webp";
import pic1 from "../assets/dev.webp";
import pic2 from "../assets/educode.jpeg";
import pic3 from "../assets/fashionpic2.png";
import pic4 from "../assets/crypto.png";

const Mission = () => {
  return (
    <div className="p-6 mt-10 flex flex-col items-center w-full">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 mt-10 relative">
        MISSION
        <span className="block w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full transition-all duration-300"></span>
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
        <AnimatedCard
          title="OUR OFFERS"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic}
        />
        <AnimatedCard
          title="OUR VISION"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic1}
        />
        <AnimatedCard
          title="OUR IMPACT"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic2}
        />
        <AnimatedCard
          title="OUR COMMUNITY"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic3}
        />
        <AnimatedCard
          title="OUR INNOVATION"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic4}
        />
        <AnimatedCard
          title="OUR GROWTH"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt excepturi consectetur quia incidunt atque quaerat debitis tempore provident ut ab."
          image={pic}
        />
      </div>
    </div>
  );
};

export default Mission;
