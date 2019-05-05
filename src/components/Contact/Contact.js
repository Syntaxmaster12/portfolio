import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)

class Contact extends React.Component {
  render() {
    return  (
      <div>
        <Container className="content" fluid>
          <div className="wrapper-3">
            <div className="contact-row">
              <Row className="justify-content-center">
                <Col xs="auto">
                  <h1 className="Contact">Contact</h1>
                  <hr className="underline-contact"></hr>
                </Col>
              </Row>
              <Row className="mt-3 justify-content-center">
                <Col xs="auto">
                <h3 className="Email">harrisonjones5678@gmail.com</h3>
                </Col>
              </Row>
              <Row
              className="justify-content-center ml-5 mt-5"
              id="contact-icons">
                <Col xs="auto">
                  <FontAwesomeIcon className="icon one contact-icon"
                  icon={['fab', 'git']}
                  size="6x"
                  style={{color: '#FFFFFF'}} />
                </Col>
                <Col xs="auto">
                <FontAwesomeIcon className="icon two contact-icon"
                icon={['fab', 'linkedin']}
                size="6x"
                style={{color: '#FFFFFF'}} />
                </Col>
                <Col xs="auto">
                <FontAwesomeIcon className="icon three contact-icon"
                icon={['fab', 'instagram']}
                size="6x"
                style={{color: '#FFFFFF'}} />
                </Col>
              </Row>
            </div>
          </div>

        </Container>
      </div>

    )
  }
}
export default Contact;
