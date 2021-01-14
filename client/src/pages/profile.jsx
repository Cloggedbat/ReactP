import React from 'react';
import {
  Container,
  Jumbotron,
} from "react-bootstrap";
import remember from '../assets/rememberthempicprofile.PNG'
import whatNext from '../assets/Whatnext-img.PNG'

const Portfolio = () => {


  const HEIGHT = 250;
  const WIDTH = 300;

  return (
    <Container id="main-container">
      <Jumbotron id="main-jumbotron">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2">
            <h1 id="pfopentext" class="display-4 text-center">My Works So far</h1>
            <p id="pfopentext" class="lead text-center">This is only the beging of what I have to offer and can not wait to add more complex
       applications as I continue on this journey</p>
          </div>
          <br />
          <br />

          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2">
              <h1 class="text-center">WhatNext
              <img src={whatNext} alt='whatsNextP' width={WIDTH} height={HEIGHT}></img>
              </h1>
              <p>WhatNext is an app to help you keep track with what is coming and going from Netflix, you have the ability to
            save any movies that you wish to watch and help you tick all those shows and movies off your list.</p>

            </div>


          </div>

        </div>
        <br />
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2">
            <h1 class="text-center">Remember Them
            <img src={remember} alt='rememberThemP' width="300" height="250"></img>
            </h1>
            <p>Remember Them is an app built to honor our nationons fallen service members. You are able to add any member to the data base after it has been reviewed. You will also be able to reach out and talk to other service members about your experiances and the experiances of others. This is only a small part of we can do to honor those who have given the ultimate sacrifice.</p>
          </div>
          <br />
          <br />
        </div>



      </Jumbotron >
    </Container>
  );
};


export default Portfolio;