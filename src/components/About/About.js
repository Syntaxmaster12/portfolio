import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
          <div className="wrapper" id="about">
          <Row className="mb-5 justify-content-center">
          <Col xs="auto">
            <h1 className="about-me-title">About Me</h1>
            <hr className="underline-about-me"></hr>
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="profile-pic mr-auto ml-auto"></div>
              <p className="about-me mt-4">I am a front end developer, who is a Philadelphia native. I have a passion for code that drives me to learn more and more about emerging technologies and frameworks. I am a strong self-motivator that will let nothing stop me from achieving what I desire. My goal is to become a full-stack JavaScript developer, and be the best there is at what I do!</p>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    )
  }
}
