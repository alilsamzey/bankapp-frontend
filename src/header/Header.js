import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banklogo from "./image (3).png";



import { Navbar, Nav, Image,     } from 'react-bootstrap';

function Header() {
  return (

    <div className="header">
      
    <div >
    
   
    <Navbar className="justify-content-end gen "     >
    <div className="logo-div">
    <Image className="he ustify-content-start" src={banklogo} />
    
    </div>
    <div className="push">
        
    <Nav  >
    <Nav.Link href="#SignIn">Sign In</Nav.Link>
    <Nav.Link href="#register">Register</Nav.Link>
    

 
           
    </Nav>
    </div>
    
    
  </Navbar>
      
      </div>
      
      <div>
      <Navbar  expand="lg">
    
    <div>
     <Navbar.Brand href="#home">ANATOLIA BANK</Navbar.Brand>
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
