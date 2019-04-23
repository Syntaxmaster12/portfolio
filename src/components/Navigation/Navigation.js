import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import './Navigation.css' ;

 class Navigation extends React.Component {
  render(){
    return (
      <Navbar bg="dark" variant="dark" className="nav" sticky="top">
        <Navbar.Brand className="navbar-brand" href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="nav-item 1">Home</Nav.Link>
          <Nav.Link href="#features" className="nav-item 2">About Me</Nav.Link>
          <Nav.Link href="#pricing" className="nav-item 3">My Skills</Nav.Link>
          <Nav.Link href="#pricing" className="nav-item 3">Contact Me</Nav.Link>
        </Nav>
    </Navbar>

  );
  }
}

export default Navigation;
