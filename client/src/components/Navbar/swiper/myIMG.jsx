import React, { useState } from 'react';

// react-id-swiper
import 'swiper/swiper-bundle.css';
import Swiper from 'react-id-swiper';

// custom css

// images
// import image1 from '../images/image1.jpg';
import whoAmI from '../../../assets/Bolton sunset.jpg'
import ressi from '../../../assets/hiking the chin.JPG'

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
                    <img src={ressi} alt="" hight="1000" width="1000"></img>
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white">
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
                    <p className="mb-5 small">
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
                    <img src={whoAmI} alt="image2" hight="1000" width="1000"></img>
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white">
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
                    <p className="mb-5 small">
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
                    <img src={ressi} alt="image3" hight="1000" width="1000"></img>
                </div>
                <div className="col-md-6 offset-md-3 my-auto text-center text-white">
                    <h1 className="text-uppercase mb-2 font-weight-bold">Slide 1</h1>
                    <p className="mb-5 small">
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
