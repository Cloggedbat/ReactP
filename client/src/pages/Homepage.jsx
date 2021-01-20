import React, { useState } from 'react';
import {
  Container,
  Jumbotron,
} from "react-bootstrap";
import './Homepage.css'
import whoAmI from '../assets/Bolton sunset.jpg'
import ressi from '../assets/resume.PNG'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
// import './styles.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function App2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

  const slides2 = [];
  for (let i = 9; i < 14; i += 1) {
    slides2.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Container id="main-container">
        <Jumbotron id="main-jumbotron">
          <h1 className="text-center">Who is Alvin Clemens</h1>
          <hr />
          <div className="text-center">
            <img className="center" src={whoAmI} alt='aj'  ></img>
          </div>

          <Swiper
            id="main"
            thumbs={{ swiper: thumbsSwiper }}
            controller={{ control: controlledSwiper }}
            tag="section"
            wrapperTag="ul"
            navigation
            pagination
            spaceBetween={0}
            slidesPerView={1}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
              console.log('Slide index changed to: ', swiper.activeIndex);
            }}
            onReachEnd={() => console.log('Swiper end reached')}
          >
            {slides}
          </Swiper>
          <Swiper
            id="thumbs"
            spaceBetween={5}
            slidesPerView={3}
            onSwiper={setThumbsSwiper}
          >
            {thumbs}
          </Swiper>

          <Swiper id="controller" onSwiper={setControlledSwiper}>
            {slides2}
          </Swiper>

          <p id="mission" className="mission text-center">
            MY MISSION:
        </p>
          <p>Over the last year, my partner and I have moved across the country to Utah and have fallen in love with this
          state. With the recent outbreak of COVID-19, my focus has shifted from working in the ski industry to looking
          at the future of our post-pandemic economy. This will be an economy that has elevated e-commerce and marketing
        to new levels, as brick and mortars become liabilities for small local businesses.</p>
          <p>I have a Bachelor of Arts in Political Science from Saint Michael's College in Colchester, VT. Over the last
          winter I worked at Ski Butlers in Park City as a Team Leader; I was in charge of our 5 to 10 ski technicians
          who would be out delivering our equipment while handling any client issues and calls. This job allowed me to
        quickly understand Utah and my future in this state.</p>
          <p>Prior to our transition to Utah, I worked with a talented team at Stowe Cider, creating one of the finest
          hard ciders on the east coast. During my time with them, I was tasked with managing our inbound orders from
          distributors to the outbound product leaving the warehouse. As Stowe Cider’s lone Sales Representative at the
          time, I oversaw a 13% growth in our Burlington market, 9% in Vermont, and 13% in our New England market. This
          was accomplished though creating good relations with new accounts and managing existing relationships. I am
          also well versed in communicating with any customer while at sales demonstrations, trade shows, or any other
        event.</p>
          <hr />
          <br />
          <div className="text-center">
            <img className="ressi" src={ressi} alt='aj'  ></img>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
};

export default App2;
