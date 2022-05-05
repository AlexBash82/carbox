import React from 'react'
import {
  Navbar,
  Container,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'

import '../Filter.css'

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
        <Container>
          {/* <p>Отфильтровать по...</p>
          <div class="dropdown">
            <p>...объему</p>

            <div class="dropdown-content">
              {boxArr
                .reduce((result, item) => {
                  return result.includes(item.boxValue)
                    ? result
                    : [...result, item.boxValue]
                }, [])
                .sort(compare)
                .map((item, index) => {
                  return (
                    <p key={index} onClick={() => onFilterValue(item)}>
                      {item}
                    </p>
                  )
                })}
            </div>
          </div> */}
          <DropdownButton
            variant="outline-secondary"
            title="Отфильтровать по..."
          >
            <DropdownButton variant="outline-secondary" title="...объему бокса">
              {boxArr
                .reduce((result, item) => {
                  return result.includes(item.boxValue)
                    ? result
                    : [...result, item.boxValue]
                }, [])
                .sort(compare)
                .map((item, index) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      key={index}
                      onClick={() => onFilterValue(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  )
                })}
            </DropdownButton>
            <Dropdown.Divider />
            <DropdownButton variant="outline-secondary" title="...цвету бокса">
              {boxArr
                .reduce((result, item) => {
                  return result.includes(item.boxColor)
                    ? result
                    : [...result, item.boxColor]
                }, [])
                .sort()
                .map((item, index) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      key={index}
                      onClick={() => onFilterColor(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  )
                })}
            </DropdownButton>
            <Dropdown.Divider />
            <DropdownButton variant="outline-secondary" title="...автомобилю">
              {boxArr
                .reduce((result, item) => {
                  return result.includes(item.car)
                    ? result
                    : [...result, item.car]
                }, [])
                .sort()
                .map((item, index) => {
                  return (
                    <Dropdown.Item
                      as="button"
                      key={index}
                      onClick={() => onFilterCar(item)}
                    >
                      {item}
                    </Dropdown.Item>
                  )
                })}
            </DropdownButton>
          </DropdownButton>

          {textFilterBy ? (
            <>
              <Navbar.Brand>Включен фильтр {textFilterBy}</Navbar.Brand>
              <Button
                variant="outline-secondary"
                onClick={() => onFilterClear()}
              >
                Сбросить фильтр
              </Button>
            </>
          ) : null}
        </Container>
      </Navbar>
    </div>
  )
}
