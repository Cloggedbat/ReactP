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
          <h1 id="pi">Personal Information</h1>
          <hr />
          <Form id="signUp-form">
            <Form.Row>
              <Col>
                <Form.Control
                  placeholder="*First name"
                // onChange={(e) => setFirstNameValue(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="*Last name"
                // onChange={(e) => setLastNameValue(e.target.value)}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="*Enter email"
                // onChange={(e) => setUsernameValue(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridNotes">
                <Form.Label></Form.Label>
                <Form.Control
                  type="Notes"
                  placeholder="*Please reach out"
                // onChange={(e) => setUsernameValue(e.target.value)}
                />
              </Form.Group>
            </Form.Row>
          </Form>
          <button onClick={contacts}>Reach Out</button>
        </Jumbotron>
      </Container>
    </>
  );
};
export default contacts;