import React from 'react'
import { Nav, NavLink, Navbar, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from './logo512.png'

function Header({ show, closeModal }) {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              height="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink as={Link} to="/">
                Home
              </NavLink>
              <NavLink as={Link} to="/view">
                View
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {show && (
            <Button variant="outline-secondary" onClick={() => closeModal()}>
              Свернуть окно просмотра
            </Button>
          )}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
