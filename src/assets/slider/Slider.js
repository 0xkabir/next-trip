import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
import image1 from '../../assets/slider/slider_1.jpg'
import image2 from '../../assets/slider/slider_2.jpg'
import image3 from '../../assets/slider/slider_3.jpg'

const Slider = () => {
  return (
    <HeroSlider
        autoplay
        height="50vh"
    >
      {/* <Overlay>
        <Wrapper>
          <Title>Zoom Background Animations</Title>
          <Subtitle>
            The <code>backgroundAnimation</code> prop of the <code>Slide</code>{' '}
            child components is set to <code>zoom</code>.
          </Subtitle>
        </Wrapper>
      </Overlay> */}
      <Slide
        label="Hallstatt - Austria"
        background={{
          backgroundImageSrc: image1,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Hvitserkur - Iceland"
        background={{
          backgroundImageSrc: image2,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        label="Jacksonville - USA"
        background={{
          backgroundImageSrc: image3,
          backgroundAnimation: 'zoom'
        }}
      />
    </HeroSlider>
  );
};

export default Slider;
