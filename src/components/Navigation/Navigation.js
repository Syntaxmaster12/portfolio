import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './Navigation.css' ;
import logo from './Harrisons-logo.svg';

 class Navigation extends React.Component {
  render(){
    return (
      <Navbar bg="dark" variant="dark" className="nav" sticky="top" collapseOnSelect expand="md">
        <Navbar.Brand>
          <img className="logo" src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
          href="#about"
          className="nav-item 2">About Me</Nav.Link>
          <Nav.Link
          href="#skills"
          className="nav-item 3">My Skills</Nav.Link>
          <Nav.Link
          href="#contact"
          className="nav-item 3">Contact Me</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
  }
}

export default Navigation;
