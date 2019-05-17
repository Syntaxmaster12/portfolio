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
              <p className="about-me mt-4">My name is Harrison Jones, I am from Philadelphia born and raised here. I am very passionate about code and anything related to it. I’ve always been the type of guy that wants to know how things work and why they work the way do, from cars to software I am interested at the deepest level on how things tick and thats probably why I am so interested in web development. Some things I love are tea, code ( of course ), cars or really anything with an engine that revs high and goes fast.</p>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    )
  }
}
