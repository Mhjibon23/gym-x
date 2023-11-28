import React from 'react';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'boxicons';

const Navbarr = () => {
    return (
        <div>
            <Navbar expand="lg" className="bgColor" fixed="top">
                <Container>
                    <Navbar.Brand className='logo' href="/">POWER <span>X</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='me-4 link' href="/">Home</Nav.Link>
                            <Nav.Link className='me-4 link' href="/classes">Service</Nav.Link>
                            <Nav.Link className='me-4 link' href="/classes">Our Classes</Nav.Link>
                            <Nav.Link className='me-4 link' href="#about">About us</Nav.Link>
                            <Nav.Link className='me-4 link' href="#blog">Blog</Nav.Link>
                            <Nav.Link className='me-4 link' href="/price">Pricing</Nav.Link>
                            <Nav.Link className='me-4 link' href="#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbarr;