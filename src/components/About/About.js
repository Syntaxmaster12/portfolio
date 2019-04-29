import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
          <Row>
            <Col>
              <div className="profile-pic">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
