import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './Navigation.css' ;

 class Navigation extends React.Component {
  render(){
    return (
      <Navbar bg="dark" variant="dark" className="nav" sticky="top" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="nav-item 1">Home</Nav.Link>
          <Nav.Link href="#Aboutme" className="nav-item 2">About Me</Nav.Link>
          <Nav.Link href="#Myskills" className="nav-item 3">My Skills</Nav.Link>
          <Nav.Link href="#Contactme" className="nav-item 3">Contact Me</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>

  );
  }
}

export default Navigation;
