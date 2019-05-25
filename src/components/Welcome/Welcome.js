import React from 'react';
import'./Welcome.css';
import { Button, Container, Col, Row } from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return(
      <div className="welcome" id="welcome">
        <Container fluid>
          <Row className="justify-content-center welcome-row">
            <Col xs="auto">
              <h1 className="hello"> My name is Harrison Jones,</h1>
              <h3 className="hello-2">I am a Front end Devloper</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Welcome;
