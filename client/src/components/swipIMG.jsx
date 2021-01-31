import React, { useState } from 'react';

// react-id-swiper
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';

// custom css
import './swipIMG.css';

// images
// import image1 from '../images/IMG_3134 (1).JPG';
import image2 from './images/ProfiletestTwo.jpg';
import image3 from './images/wide screen resize8.jpg';

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
          <img src={image3} alt="image1" width="2000"></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center ">
          <h1 id="theCoder" className="text-uppercase mb-2 font-weight-bold">The Coder</h1>
          <p id="theCoder" className="mb-5  font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" width="2000"></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 className="text-uppercase mb-2 font-weight-bold">The Skier</h1>
          <p className="mb-5  font-weight-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div>
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={image2} alt="image2" width="2000"></img>
        </div>
        <div className="col-md-6 offset-md-3  text-center">
          <h1 className="text-uppercase mb-2 font-weight-bold">The Skier</h1>
          <p className="mb-5  font-weight-bold">
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
