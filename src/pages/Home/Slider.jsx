import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
import './Slider.css'

const Slider = () => {
  return (
    <HeroSlider
        autoplay
        height="70vh"
    >
      <Slide
        label="Hallstatt - Austria"
        background={{
          backgroundImageSrc: 'https://images.unsplash.com/photo-1591448764624-d7973a442bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcGFkb2NpYSUyMHR1cmtleXxlbnwwfHwwfHw%3D&w=1000&q=80',
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Hvitserkur - Iceland"
        background={{
          backgroundImageSrc: 'https://res.cloudinary.com/simpleview/image/upload/v1674650667/clients/norway/New_Project_11__28f603e7-fce9-4bb3-96ec-8500d66f86f1.jpg',
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Jacksonville - USA"
        background={{
          backgroundImageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Ankor_Wat_temple.jpg',
          backgroundAnimation: 'zoom'
        }}
      />
    </HeroSlider>
  );
};

export default Slider;
