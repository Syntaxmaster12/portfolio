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
          <div className="wrapper-2">
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Assumenda nihil, voluptatibus numquam consequatur aliquam alias quidem<br/> ipsa eos amet ipsum saepe animi deserunt officia nesciunt<br/>, aperiam odio fugiat sint, hic.10
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
