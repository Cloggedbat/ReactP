import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Jumbotron
} from "react-bootstrap";
// import remember from '../assets/rememberthempicprofile.PNG'
import PDF from '../components/images/AlvinClemensResume2-10.pdf'
import "./contacts.css"
const contacts = () => {

  // if (firstNameValue === "" || lastNameValue === ""|| usernameValue === "") {
  //   console.log("Missing required credentials");
  //   alert("Missing required credentials. Please enter required information");
  // } else {

  // const userObj = {
  // firstName: firstNameValue,
  // lastName: lastNameValue,
  // username: usernameValue,


  // }
  // console.log(userObj);
  // axios.post("/api/contacts",
  //   userObj
  // ).then((res) => {
  //   console.log("message recived");
  //   console.log(res.data.userId);
  //   alert("Successfully Registered!");
  // }).catch(err => {
  //   console.log(err);
  // });

  // }

  return (
    <>
      <Container id="main-container">
        <Jumbotron id="signup-jumbotron">

          <h1>I'd like to hear from you</h1>
          <h3> Lets build together!</h3>

          <br />
          <br />
          <br />
          <hr />
          <div className="ref-links ml-auto" id="social">
            <div className="row ">

              <a className="nav-item nav-link text-center" href="mailto: alvinclemensjr@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-paper-plane fa-4x" id="email" ></i>

                <p id="cantactdata">Email Me</p>
              </a>

              <a className="nav-item nav-link text-center" href="https://github.com/Cloggedbat" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-4x" id="github" ></i>
                <p id="cantactdata">Look Me Up</p>
              </a>
              <a className="nav-item nav-link text-center" href="https://www.linkedin.com/in/alvin-clemens-114377107/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin fa-4x" id="linkedin" ></i>
                <p id="cantactdata">Check Me Out</p>
              </a>
              <a className="nav-item nav-link text-center" href={PDF} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-mobile fa-4x" id="phone" ></i>
                <p id="cantactdata" className="text-center">Call Me At </p>
                <p id="cantactdata" className="text-center">(610)506-7532</p>

              </a>
              <a className="nav-item nav-link text-center" href={PDF} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-file-text-o fa-4x" id="resume" ></i>
                <p id="cantactdata">Resume</p>
              </a>
            </div>
          </div>

        </Jumbotron>
      </Container>
    </>
  );
};
export default contacts;