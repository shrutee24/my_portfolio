import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap'; 


const NavbarComponent=()=>{
      // Define the links dynamically
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Services', path: '/services' },
    



    { label: 'Contact', path: '/contact' },
    


  ];

    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {links.map((link, index) => (
              <Nav.Link key={index} as={Link} to={link.path}>
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
};
export default NavbarComponent;