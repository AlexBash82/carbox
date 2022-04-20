import React from 'react'
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
} from 'react-bootstrap'

export default function SideBar({
  onFilterValue,
  onFilterClear,
  onFilterColor,
}) {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>Открыть меню поиска</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Отфильтровать по...
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown title="...объему" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item onClick={() => onFilterValue(400)}>
                    400 литров
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onFilterValue(420)}>
                    420 литров
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onFilterValue(430)}>
                    430 литров
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onFilterValue(460)}>
                    460 литров
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onFilterValue(550)}>
                    550 литров
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="...цвету" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item onClick={() => onFilterColor('черный')}>
                    Черный
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => onFilterColor('серый')}>
                    Серый
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button variant="outline-success" onClick={() => onFilterClear()}>
                Сбросить фильтр
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
