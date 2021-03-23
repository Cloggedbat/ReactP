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

          <img id="starshot" src={webDev} width="302" />
          <br /><p>What up! I’m Alvin Honey Clemens J.R. or A.J. for short, a recent transplant to Utah and graduate of the University of Utah Coding Bootcamp. After graduating from Saint Michael's College in 2017 (with a bachelor of arts in political science) I continued working with VPIRG, an environmental consumer advocacy group that i worked with while in school. That was until my partner and I made a decision to leave Vermont and move to Salt Lake City to see more of the United States and to be closer to the national parks. So in 2019 we packed up and sold our old college furniture and drove across the country. Everything was great the first 7 months that is until March 14th, 2020 that day the whole world stopped…</p>
          <br />
          <br />

          <h4>The Coder</h4>
          <p>Well actually that the world shifted on the 16th when Salt Lake City had a 5.5 earthquake but besides that I was jobless and looking to make a more permanent change in my career. So after year of dabbling in HTML and a little of Javascript I decided to make the leap and applied for the University of Utah's Coding Bootcamp and dedicated the next 6 months to learning HTML, CSS, Javascript, Microsoft Azur, Node JS, MySQl, React, and MongoDB.</p>

          <h4>The Outdoorsman</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
          <h4>The Traveler</h4>
          <p>Prior to our transition to Utah, I worked with a talented team at Stowe Cider, creating one of the finest
          hard ciders on the east coast. During my time with them, I was tasked with managing our inbound orders from
          distributors to the outbound product leaving the warehouse. As Stowe Cider’s lone Sales Representative at the
          time, I oversaw a 13% growth in our Burlington market, 9% in Vermont, and 13% in our New England market. This
          was accomplished though creating good relations with new accounts and managing existing relationships. I am
          also well versed in communicating with any customer while at sales demonstrations, trade shows, or any other
        event.</p>
          <hr />
          <br />

          {//instagram feed 
          }
          <h2>Follow the Adventure: </h2>
          <div id="curator-feed-default-feed-layout">
            <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>          </div>
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

