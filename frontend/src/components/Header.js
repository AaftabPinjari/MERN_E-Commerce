import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }

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
                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
                            </NavDropdown>
                        ) : <LinkContainer to="/login">
                            <Nav.Link href="#features"><i className="fas fa-user px-1"></i>Sign In</Nav.Link>
                        </LinkContainer>}


                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
