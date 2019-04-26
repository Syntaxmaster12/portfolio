import React from 'react';
import './About.css';
import { Container, Col, Row } from 'react-bootstrap';
class About extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
            <Row className="justify-content-center">
              <Col xs="auto">
                <h1 className="heading">My skill set</h1>
                </Col>
            </Row>
            </Container>
      </div>
    );
  }
}
export default About;
