import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Skill Hunter</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to='/home' >Home</Link>
            <Link className='nav-link' to='/courses'>Courses</Link>
            <Link className='nav-link' to='/blog' >Blog</Link>
            <Link className='nav-link' to='/login' >login</Link>
            <Link className='nav-link' to='/register' >Register</Link>
            <Link className='nav-link' to='/faq' >FAQ</Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>
    </div>
  );
};

export default Navbar1;