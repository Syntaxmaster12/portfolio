import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
          <Row className="justify-content-sm-center">
            <Col xs="auto">
              <div className="profile-pic">
              </div>
            </Col>
            <Col xs="4">
              <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. Quisquam porro, eaque. Earum, maxime! Delectus, cumque. </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
