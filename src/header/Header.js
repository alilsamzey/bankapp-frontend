import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banklogo from "./banklogo.jpg";


import { Navbar, Nav,   Image,     } from 'react-bootstrap';

function Header() {
  return (

    <div >
      
    <div  >
    
    <Navbar className="justify-content-end gen" bg="primary"  variant="dark"  >
    <div>
    <Image className="he ustify-content-start" src={banklogo} />
    
    </div>
    <div className="push">
        
    <Nav  >
    <Nav.Link  href="#home">Contact</Nav.Link>
    <Nav.Link  href="#features">Sign In</Nav.Link>
    <Nav.Link  href="#home">Register</Nav.Link>
           
    </Nav>
    </div>
    
    
  </Navbar>
      
      </div>
      
      <div>
      <Navbar bg="primary" variant="dark" expand="lg">
    
    <div>
     <Navbar.Brand href="#home">ANATOLIEN BANK</Navbar.Brand>
    </div>
    <div className="push">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">ABOUT US</Nav.Link>
      <Nav.Link href="#features">PRODUCT</Nav.Link>
      <Nav.Link href="#pricing">PACKAGE</Nav.Link>
      <Nav.Link href="#Location">LOCATION</Nav.Link>
      <Nav.Link href="#Contact">CONTACT</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </div>
    
    
  </Navbar>
      </div>
    </div>
    
  )
};

export default Header
