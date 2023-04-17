import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { navlinks } from '../data';
import logo from "../assets/favicon.png"

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/" onClick={() => window.scrollTo(0, 0)}><img src={logo} alt="logo" style={{height: "50px", width: "50px"}} /><p style={{margin: 10, display:'inline-block'}}>TripVerse</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navlinks.map((link, index) => {
                                return <Nav.Link key={index} href={"#" + link}>{link}</Nav.Link>
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;