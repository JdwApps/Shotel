'use client'
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AnimatedTextCharacter from './AnimatedTextCharacter';
import AniText from './AniText';

const BGSlider = ({images, title}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true, // Set fade to true for fade animation
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // 4 seconds
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-full h-screen relative justify-center align-center overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="relative" key={index}>
            <div className="w-full h-screen relative" >
              <img src={`/img/${image}`} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div
                className="absolute bottom-0 w-full h-1/5 bg-gradient-to-t from-gray-800 to-transparent"
    
              ></div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                textAlign: 'center',
                width: '100%', // Set width to 100%
              }}
            >
              <AnimatedTextCharacter text="S" />
              <AnimatedTextCharacter text={title} />
              <AniText text="Bluff Beach, Bocas del Toro" />
            
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BGSlider;
