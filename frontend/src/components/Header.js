import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="#home">Mesh Agro</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="mr-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link href="#home"><i className="fas fa-shopping-cart px-1"></i>Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link href="#features"><i className="fas fa-user px-1"></i>Sign In</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
