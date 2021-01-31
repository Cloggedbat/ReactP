import React, { useState } from 'react';
import {
  Container,
  Jumbotron,
} from "react-bootstrap";
// import './Homepage.css'
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
          <h1 className="text-center">Who is Alvin Clemens</h1>
          <hr />





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
          </div>

          <div className="ref-links ml-auto">
            <div className="row">
              <a className="nav-item nav-link" href="https://github.com/portercol" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" id="github" ></i>
              </a>
              <a className="nav-item nav-link" href="https://www.linkedin.com/in/collin-porter-7b65311a8/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" id="linkedin" ></i>
              </a>
              <a className="nav-item nav-link" href="https://docs.google.com/document/d/1ntZxjSIBELqvqXeJtNiKjHUHoYsBll2aQQ2I90YVXig/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-file-text-o" id="resume" ></i>
              </a>
            </div>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
};


export default App2;

