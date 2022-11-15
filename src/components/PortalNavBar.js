import React from 'react'
import { Button, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBar from './NavBar';
//import { useNavigate } from "react-router-dom";
const PortalNavBar = () => {
    // const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/auth/register');
    // }
  return (
    <React.Fragment>
            <Navbar bg="dark" expand='lg' className="navbar-dark navbar navbar-expand-lg">
                <Container>
                    <Navbar.Brand>CodeRavi | Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            {<NavBar></NavBar>}
                            <Nav.Link>Profile</Nav.Link>

                            <Nav.Link>
                                <Button className="btn-warning" >Logout</Button>
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
  )
}

export default PortalNavBar