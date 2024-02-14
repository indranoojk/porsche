import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
// import slider1 from '../assets/slider-1.jpg'
// import slider2 from '../assets/slider-2.webp'
// import slider3 from '../assets/Brabus-900-Rocket-R-Porsche-911-Turbo-S-4K-Wallpaper-jpg.webp'
// import slider4 from '../assets/porsche-taycan-turbo-s-2019.jpg'


const Slider = () => {
    
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1683380394066-666966a14bd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1683380394066-666966a14bd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1547757015-025b1a633637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBvcnNjaGV8ZW58MHx8MHx8fDA%3D'
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className='max-w-[1400px] w-full h-[400px] md:h-[520px] m-auto relative group cursor-pointer'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full bg-center bg-no-repeat bg-cover'></div>
      {/* Left Arrow */}
      <div className="hidden md:group-hover:block md:absolute md:top-[50%] md:bg-white md:m-2 md:p-4 md:text-2xl md:left-1 md:hover:bg-[#d5001c] md:hover:text-white">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>
      {/* Right Arrow */}
      <div className="hidden md:group-hover:block md:absolute md:top-[50%] md:bg-white md:m-2 md:p-4 md:text-2xl md:right-1 md:hover:bg-[#d5001c] md:hover:text-white">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
      <div className="flex bottom-4 justify-center py-2">
        {slides.map((slide, slideIn) => {
          <div className='text-2xl cursor-pointer '>
            <RxDotFilled />
          </div>
        })}
      </div>
    </div>
  )
}

export default Slider
