import React from 'react';
import './Skills.css';
import { Container, Col, Row } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab)

class Skills extends React.Component {
  render() {
    return (
      <div>
        <Container className="content" fluid>
          <div className="wrapper-2" id="skills">
            <Row className="justify-content-center">
              <Col xs="auto">
                <h1 className="heading">My skill set</h1>
                <hr className="underline mt-4"></hr>
                </Col>
            </Row>
              <Row className="justify-content-center icons-row">
                <Col xs="auto">
                  <FontAwesomeIcon className="icon one"
                  icon={['fab', 'js']}
                  size="8x"
                  style={{color: '#f7df1e'}} />
                  <FontAwesomeIcon className="icon two"
                  icon={['fab', 'html5']}
                  size="8x"
                  style={{color: '#e34f26'}} />
                  <FontAwesomeIcon className="icon three"
                  icon={['fab', 'css3-alt']}
                  size="8x"
                  style={{color: '#007bff'}} />
                  <FontAwesomeIcon className="icon four"
                  icon={['fab', 'bootstrap']}
                  size="8x"
                  style={{color: '#602c50'}} />
                  <FontAwesomeIcon className="icon five"
                  icon={['fab', 'react']}
                  size="8x"
                  style={{color: '#00d8ff'}} />
                </Col>
              </Row>
                <Row className="justify-content-center">
                  <Col xs="auto">
                    <p className="sub-text">
                   I am well rounded in using the core web development technologies  HTML5, CSS3 (CSS grid, flexbox), AJAX, JavaScript (ES6) and very comfortable using modern front end frameworks like React.js, Bootstrap, and React-Bootstrap which this site was built with. Also, I am experienced with using various tools such as Git, Node Package Manager and the command line.
                  </Col>
                </Row>
              </div>
            </Container>
      </div>
    );
  }
}
export default Skills;
