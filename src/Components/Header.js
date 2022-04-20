import React from 'react'
import { Nav, NavLink, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import logo from './logo512.png'
import Home from '../Pages/Home'
import View from '../Pages/View'

function Header() {
  return (
    <div>
      <Router>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
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
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Header
