import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
//import SignUp from './SignUp'
import {Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    const loginchange = localStorage.getItem('email');

  return (
    <React.Fragment>
            <div className=''>
            <Navbar bg="" expand='lg' className="navbar container-fluid setbg navbar navbar-expand-lg">
                <Container >
                    <Navbar.Brand><img src='logob.svg' alt=''></img></Navbar.Brand>
                    
                            
                            
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <ul className='navbar-nav'>
                            <Link className='nav-link' to='/home'>Home</Link>
                            <Link className='nav-link' to='/about'>About</Link>
                            <Link className='nav-link' to='/courses'>Courses</Link>
                            <Link className='nav-link' to='/contact'>Contact</Link>

                            {(!loginchange)?
                            <Nav.Link>
                                <Button className="btn-primary shadow" onClick={()=>{navigate('/signup')}}>Register</Button>
                            </Nav.Link> :(!loginchange)? <Nav.Link>
                                <Button className="btn-success shadow" onClick={()=>{navigate('/login')}}>Login</Button>
                            </Nav.Link> : null
                             }
                            
                             </ul>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </React.Fragment>
  )
}

export default NavBar