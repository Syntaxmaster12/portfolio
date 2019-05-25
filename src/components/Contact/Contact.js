import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pdf from './Resume/H.Jones-ITResume.pdf';

library.add(fab)

class Contact extends React.Component {
  render() {
    return  (
      <div>
        <Container className="content" fluid>
          <div className="wrapper-3" id="contact">
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
                <a href= {Pdf}
                target = "_blank">
                  <Button size="sm"
                    className="button mt-5"> My resume</Button>
                </a>
                </Col>
              </Row>
              <Row
              className="justify-content-center"
              id="contact-icons">
                <Col xs="auto">
                  <a href="https://github.com/Syntaxmaster12">
                    <FontAwesomeIcon className="icon one contact-icon"
                      icon={['fab', 'git']}
                      size="6x"
                      style={{color: '#FFFFFF'}} />
                    </a>
                </Col>
                <Col xs="auto">
                <a href="https://www.linkedin.com/feed/?trk=onboarding-landing">
                <FontAwesomeIcon className="icon two contact-icon"
                  icon={['fab', 'linkedin']}
                  size="6x"
                  style={{color: '#FFFFFF'}}/>
                  </a>
                </Col>
                <Col xs="auto">
                  <a href="https://www.instagram.com/d.code__/">
                    <FontAwesomeIcon className="icon three contact-icon"
                      icon={['fab', 'instagram']}
                      size="6x"
                      style={{color: '#FFFFFF'}}/>
                  </a>
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
