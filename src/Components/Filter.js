import React from 'react'

import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Button,
} from 'react-bootstrap'

export default function Filter({
  onFilterValue,
  onFilterClear,
  onFilterCar,
  onFilterColor,
  boxArr,
  textFilterBy,
}) {
  function compare(a, b) {
    if (a > b) return 1
    if (a === b) return 0
    if (a < b) return -1
  }
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar">
            Открыть меню фильтра
          </Navbar.Toggle>
          {textFilterBy ? (
            <>
              <Navbar.Brand aria-controls="offcanvasNavbar">
                Включен фильтр {textFilterBy}
              </Navbar.Brand>
              <Button
                variant="outline-secondary"
                onClick={() => onFilterClear()}
              >
                Сбросить фильтр
              </Button>
            </>
          ) : null}

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
                <NavDropdown
                  title="...объему бокса"
                  id="offcanvasNavbarDropdown"
                >
                  {boxArr
                    .reduce((result, item) => {
                      return result.includes(item.boxValue)
                        ? result
                        : [...result, item.boxValue]
                    }, [])
                    .sort(compare)
                    .map((item, index) => {
                      return (
                        <NavDropdown.Item
                          key={index}
                          onClick={() => onFilterValue(item)}
                        >
                          {item}
                        </NavDropdown.Item>
                      )
                    })}
                </NavDropdown>
                <NavDropdown
                  title="...цвету бокса"
                  id="offcanvasNavbarDropdown"
                >
                  {boxArr
                    .reduce((result, item) => {
                      return result.includes(item.boxColor)
                        ? result
                        : [...result, item.boxColor]
                    }, [])
                    .sort()
                    .map((item, index) => {
                      return (
                        <NavDropdown.Item
                          key={index}
                          onClick={() => onFilterColor(item)}
                        >
                          {item}
                        </NavDropdown.Item>
                      )
                    })}
                </NavDropdown>
                <NavDropdown title="...автомобилю" id="offcanvasNavbarDropdown">
                  {boxArr
                    .reduce((result, item) => {
                      return result.includes(item.car)
                        ? result
                        : [...result, item.car]
                    }, [])
                    .sort()
                    .map((item, index) => {
                      return (
                        <NavDropdown.Item
                          key={index}
                          onClick={() => onFilterCar(item)}
                        >
                          {item}
                        </NavDropdown.Item>
                      )
                    })}
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
