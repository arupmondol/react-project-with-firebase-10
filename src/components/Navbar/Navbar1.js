import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import { useContext } from 'react';
import './Navbar.css'
const Navbar1 = () => {
 const { user,logOut } = useContext(AuthContext)
 const handleLogOut = () => {
  logOut()
    .then(() =>{})
    .catch(error =>console.error(error));

 }
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Skill Hunter</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to='/home' >Home</Link>
            <Link className='nav-link' to='/courses'>Courses</Link>
            <Link className='nav-link' to='/blog' >Blog</Link>
            <Link className='nav-link' to='/register' >Register</Link>
            <Link className='nav-link' to='/faq' >FAQ</Link>
            <Link className='nav-link'  >Dark/Light</Link>
            {
              user?.email ?
               <button className='nav-link1' onClick={handleLogOut}>Sing Out</button>:
               <Link to='/login' className='nav-link'>Login</Link>
            }
            
          <span className='text'> {user?.email} </span> 
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default Navbar1;