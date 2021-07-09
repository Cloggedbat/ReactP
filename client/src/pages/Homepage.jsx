import React, { useState } from 'react';
import {
  Container,
  Jumbotron,
  Col,
  Row,
} from "react-bootstrap";
import PDF from '../components/images/AlvinClemensResume2-10.pdf'
import webDev from '../components/images/The Coder.JPG';
import InstagramEmbed from 'react-instagram-embed';
import topOFA from '../components/images/topofalta.jpg';

import './Homepage.css'

// un used images
// import whoAmI from '../assets/Bolton sunset.jpg'
// import HeroSlider from '../components/Navbar/swiper/myIMG';
// import ressi from '../assets/resume.PNG'
/// import Swiper from 'react-id-swiper';

// custom css






const App2 = () => {


  return (
    <>


      <Container id="main-container">
        <Jumbotron id="main-jumbotron">
          <h1 className="text-center">My Story</h1>
          <hr />





          <p className="mission">

          </p>

          <Container id="">

            <br />
            <p className="text-center">	What’s up! I’m Alvin Honey Clemens Jr. or A.J. for short - a recent transplant to Utah and graduate of the University of Utah Coding Bootcamp. After graduating from Saint Michael's College in 2017, with a bachelor of arts in political science, I began a full-time position with VPIRG (the Vermont Public Interest Research Group), an environmental consumer advocacy organization that I began working with in school. That was until 2019, when my partner and I made a decision to leave Vermont and move to Salt Lake City to see more of the United States and to be closer to the national parks. So we packed up and sold our old college furniture and drove across the country. Everything was great the first 7 months, that is until March 14th, 2020 the day the whole world stopped…
            </p>
          </Container>
          <img id="starshot" src={topOFA} width="300" />
          <br />
          <br />

          <h4>The Coder</h4>
          <p>Well actually, the world really shifted on the 16th when Salt Lake City had a 5.5 earthquake and I was jobless and looking to make a more permanent change in my career. After years of dabbling in HTML and a little of Javascript, I decided to take the leap and applied to the University of Utah's Coding Bootcamp and dedicated the next 6 months to learning HTML, CSS, Javascript, Microsoft Azure, Node JS, MySQl, React, and MongoDB. Honestly, this was one of the best decisions I have ever made, but don’t get me wrong it was the most challenging 6 months of my life while also exciting.

          </p>

          <h4>The Outdoorsman</h4>
          <p>
            A huge part of my life has been spent exploring the Green and White mountains of New England; hiking them in the summer and skiing them in the winter. Skiing and ski racing have had a huge influence in my life, pushing me to see what is happening around us and take note in what needs to be protected. That’s why working with VPIRG was a gratifying and engaging experience each day, and you could find yourself anywhere across the state biking up long driveways and speaking to complete strangers about a myriad of environmental topics. I quickly became a Director of the Canvass my second summer, helping to lay the groundwork for our two most successful canvases in which we fundraised over $800,000 in 4 months. It is through my time as a VPIRG Director that I learned there is little I can't do once I put my mind to the task.
          </p>
          <h4 >The Traveler</h4>
          <p className="text-center">
            I have been fortunate enough to have parents that believed in lived experiences and they passed down a love for travel and the belief that the only way to learn about a culture is to experience it. From ski racing in Europe and South America, which allowed me to explore regions that few have heard of and fewer have seen; studying abroad in Bethlehem to learn more about conflicts in the Middle East; to finally making it to Russia to see Red Square and the people who are amazing. This love of travel is also what helped push my partner and I to make the move across the country, as a way to get out of our comfort zone and experience what our great nation has to offer!



          </p>
          <br />

          {//instagram feed 
          }
          <h2>Follow the Adventure </h2>
          <hr />
          <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>


          <Row>

            <div className="ref-links ml-auto" id="social">
              <div className="row">
                <a className="nav-item nav-link" href="https://github.com/Cloggedbat" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github fa-2x" id="github" ></i>
                </a>
                <a className="nav-item nav-link" href="https://www.linkedin.com/in/alvin-clemens-114377107/" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin fa-2x" id="linkedin" ></i>
                </a>
                <a className="nav-item nav-link" href={PDF} target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-file-text-o fa-2x" id="resume" ></i>
                </a>
              </div>
            </div>

          </Row>
        </Jumbotron>
      </Container>
    </>
  );
};


export default App2;

