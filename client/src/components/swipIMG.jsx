import React, { useState } from 'react';

// react-id-swiper
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

// custom css
import './swipIMG.css';
// images
// import image1 from '../images/IMG_3134 (1).JPG';

import webDev from './images/The Coder.JPG';
import theSkier from './images/chickchocks.jpg'
import theTraveler from './images/theTraveler.JPG';

// SwiperCore.use([Navigation, Pagination])

// slider configuration
const HeroSliderConfigs = {
  containerClass: 'swiper-container hero-slider',
  loop: true,
  autoplay: {
    delay: 8000,
    speed: 5000
  },
  // parallax: true,

  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 0,
  runCallback: true,
  effect: 'cube',
};

// slider component
const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper} >
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >

          <img src={webDev} alt="image1" width="1302" ></img>
        </div>

        <div className="col-md-6 offset-md-3  text-center">
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
          <img src={theSkier} alt="image2" width="1302" ></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 id="IMGTEXT" className="text-uppercase mb-2 font-weight-bold">The Outdoorsman</h1>
          <p id="IMGTEXT" className="mb-5  font-weight-bold">
            Skiing is a passion that I have had my whole life, and has allowed me to see some amazing places.
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={theTraveler} alt="image2" width="1302" ></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 id="IMGTEXT" className="text-uppercase mb-2 font-weight-bold">The Traveler</h1>
          <p id="IMGTEXT" className="mb-5  font-weight-bold">
            It is important to see new places and learn about other culturs.
          </p>
        </div>
      </div>
    </Swiper >
  );
};

export default HeroSlider;
