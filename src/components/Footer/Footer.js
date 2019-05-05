import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return  (
      <div>
        <Container className="footer" fluid>
        <div className="wrapper-footer">
          <Row className="justify-content-center">
            <Col xs="auto">
              <p className="made-by">Made by me</p>
            </Col>
          </Row>
        </div>
        </Container>
      </div>
    )
  }
}

export default Footer;
