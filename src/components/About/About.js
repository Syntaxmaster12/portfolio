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
              <p className="about-me mt-4">From Philadelphia, PA; I am very passionate about technology. I dove into the field of Coding and have
applied it like a second language in my everyday use. I have always been an engineer; a problem solver. I
love to figure out how things work, and how to improve them overtime. I am also a creator; an empty
canvas to me is a playground. In the field of Web Development. I am dedicated to applying myself with creating
some of the most beautiful, responsive yet simplistic, WebPages for both clients and businesses. My goal is to be an
asset within a company, where I can grow and hone my skills in becoming a better Developer.</p>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    )
  }
}
