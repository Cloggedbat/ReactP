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
          <br />

          <div className="ref-links ml-auto" id="social">
            <div className="row ">
              <a className="nav-item nav-link" href="mailto: alvinclemensjr@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-paper-plane fa-4x" id="github" ></i>

                <p>Email Me</p>
              </a>

              <a className="nav-item nav-link" href="https://github.com/Cloggedbat" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-4x" id="github" ></i>
                <p>Look Me Up</p>
              </a>
              <a className="nav-item nav-link" href="https://www.linkedin.com/in/alvin-clemens-114377107/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin fa-4x" id="linkedin" ></i>
                <p>Check Me Out</p>
              </a>
              <a className="nav-item nav-link" href={PDF} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-mobile fa-4x" id="resume" ></i>
                <p>Call Me At </p>
                <p>(610)506-7532</p>

              </a>
              <a className="nav-item nav-link" href={PDF} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-file-text-o fa-4x" id="resume" ></i>
                <p>Resume</p>
              </a>
            </div>
          </div>

        </Jumbotron>
      </Container>
    </>
  );
};
export default contacts;