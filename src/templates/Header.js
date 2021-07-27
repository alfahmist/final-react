import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import logo from '../logo.svg'
function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
            <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top App-logo"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                    <Button variant="outline-success">Masuk</Button>
                    <div className="margin-left-2">
                        <Button variant="success">Daftar</Button>
                    </div>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
