import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import { Navbar, Nav } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbars () {
  return(
    <>
    <Navbar expand="lg" variant="light" bg="light" sticky="top">
    <div className="container">
    <Navbar.Brand href="#home">
    <img
      alt=""
      src="/logo.svg"
      width="30"
      height="30"
      className="d-inline-block align-center"
    />{' '}
    DSC TIET
  </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end" variant="dark" bg="dark">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Events</Nav.Link>
    <Nav.Link href="#pricing">Resources</Nav.Link>
    <Nav.Link href="#pricing">Projects</Nav.Link>
    <Nav.Link href="#pricing">Team</Nav.Link>
    <Nav.Link href="#pricing">Achievements</Nav.Link>
    <Nav.Link href="#pricing">Blog</Nav.Link>
    </Navbar.Collapse>
    </div>
  </Navbar>
    </>
  )
};

export default Navbars;