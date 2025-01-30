import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const SliderCard = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "BUILDING HUMAN CAPITAL THROUGH TRANSFORMATION",
      description: "Empowering individuals through education and skills development.",
    },
    {
      url: "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "INNOVATIVE TECHNOLOGY SOLUTIONS",
      description: "Bringing the latest innovations to enhance business growth.",
    },
    {
      url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "GLOBAL BUSINESS CONNECTIONS",
      description: "Building bridges for international collaborations and success.",
    },
    {
      url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "SUSTAINABLE DEVELOPMENT GOALS",
      description: "Creating a greener and more sustainable future.",
    },
    {
      url: "https://images.pexels.com/photos/3778684/pexels-photo-3778684.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "EXCELLENCE IN CUSTOMER SERVICE",
      description: "Providing top-notch services to our valued clients.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative max-w-[1600px] w-full h-[700px] mx-auto px-4 py-16">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover rounded-2xl duration-300 relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-6 rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-bold">{slides[currentIndex].title}</h2>
          <p className="mt-2 text-sm md:text-lg max-w-[600px]">{slides[currentIndex].description}</p>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-[50%] left-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-[50%] right-5 transform -translate-y-1/2 p-3 rounded-full bg-black text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {slides.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            className={`text-xl cursor-pointer transition-all ${
              slideIndex === currentIndex ? "text-blue-500 scale-125" : "text-gray-400"
            }`}
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCard;
