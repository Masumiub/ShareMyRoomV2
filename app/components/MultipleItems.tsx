'use client';

import React from 'react';
import Slider from 'react-slick';

const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full">
      {/* Header in container */}


      {/* Slider that breaks out  //md:left-[calc(50%-min(50%,theme(maxWidth.7xl)/2))] md:w-[calc(100%+calc(100vw-theme(maxWidth.7xl))/2)]*/}
      <div className="w-full overflow-hidden">
        <div className="relative left-0 lg:left-[calc(50%-min(50%,theme(maxWidth.7xl)/2))] lg:w-[calc(100%+calc(100vw-theme(maxWidth.7xl))/2)]  w-full "> 
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="px-3">
                <div className="bg-blue-500 h-48 rounded-lg flex items-center justify-center text-white">
                  <h3 className="text-2xl font-bold">Slide {item}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MultipleItems;