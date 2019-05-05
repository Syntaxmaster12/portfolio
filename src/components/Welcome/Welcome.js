import React from 'react';
import'./Welcome.css';
import { Button, Container, Col, Row } from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return(
      <div className="welcome">
        <Container fluid>
          <Row className="justify-content-center welcome-row">
            <Col xs="auto">
              <Button variant="primary" size="lg" className="button" href="#">Check me out</Button>
              <h1 className="hello"> Hello My name is Harrison Jones, <br></br>I am a Junior Front end Devloper</h1>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default Welcome;
