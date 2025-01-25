import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";

const SliderCard = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url: "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      url: "https://images.pexels.com/photos/3778684/pexels-photo-3778684.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  const goToSlide =(slideIndex)=>{
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="max-w-[1600px] w-full relative h-[700px]  px-4 py-16 m-auto">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover rounded-2xl duration-300"
      ></div>
      
      <div
        className="absolute top-[50%] left-5 transform -translate-y-1/2 p-2 rounded-full bg-black text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      
      <div
        className="absolute top-[50%] right-5 transform -translate-y-1/2 p-3 rounded-full bg-black text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className='flex justify-center top-4 py-2'>
   {slides.map((slide,slideIndex)=>(
   <div key={slideIndex}>
    <RxDotFilled className='text-xl cursor-pointer' onClick={()=>goToSlide(slideIndex)}/>
   </div>
   ))}
      </div>
    </div>
  );
};

export default SliderCard;
