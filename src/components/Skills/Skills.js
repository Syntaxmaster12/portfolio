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
                <h1 className="heading mr-3">My skill set</h1>
                <hr className="underline mr-8"></hr>
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
                    My skill set is primarily focused on front end web development, I have a good grasp on HTML5, CSS3, Javascript ( ES6 ) and responsive web design. I am comfortable performing AJAX calls and making a website dynamic by using an API, I am not shy of using a bash terminal I actually enjoy it. I also understand the basics of React.js and Bootstrap, in fact, this portfolio was created using React-Bootstrap. Using Git isn’t an issue for me I am more than comfortable using version control.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
      </div>
    );
  }
}
export default Skills;
