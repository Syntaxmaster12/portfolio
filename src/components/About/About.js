import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
          <div className="wrapper">
          <Row className="mb-5 justify-content-center">
          <Col xs="auto">
            <h1 className="about-me-title">About Me</h1>
            <hr className="underline-about-me"></hr>
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <div className="profile-pic">
              </div>
            </Col>
            <Col xs="8">
              <p className="about-me mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. </p>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    )
  }
}
