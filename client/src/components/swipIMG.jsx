import React, { useState } from 'react';

// react-id-swiper
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

// custom css
import './swipIMG.css';

// images
// import image1 from '../images/IMG_3134 (1).JPG';
import image2 from './images/The Coder.JPG';

import image3 from './images/wide screen resize8.jpg';
import image from './images/chickchocks.jpg'

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  parallax: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 0,
  effect: 'slide'
};

// slider component
const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image1" width="1302" ></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center ">
          <h1 id="IMGTEXT" className="text-uppercase mb-2 font-weight-bold">The Coder</h1>
          <p id="IMGTEXT" className="mb-5  font-weight-bold">
            Over the last 6 months I have taken the University of Utahs Coding Bootcamp becoming proficiant in HTML, CSS, Javascript, Microsoft Azur, Node JS, MySQl, and React.
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image} alt="image2" width="1302" ></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 id="IMGTEXT" className="text-uppercase mb-2 font-weight-bold">The Skier</h1>
          <p id="IMGTEXT" className="mb-5  font-weight-bold">
            I have spent my whole life skiing and it is my passion that I have falowed to Utah.
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" width="1302" ></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 id="IMGTEXT" className="text-uppercase mb-2 font-weight-bold">Something</h1>
          <p id="IMGTEXT" className="mb-5  font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
