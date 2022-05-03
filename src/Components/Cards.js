import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Card from './Card'
import boxArr from '../BaseLogic'
import Filter from './Filter'

function Cards({ openClose }) {
  const [boxMass, setBoxMass] = useState(boxArr)
  const [text, setText] = useState('')

  function onFilterValue(prop) {
    setBoxMass(boxArr.filter((mas) => mas.boxValue === prop))
    setText(String('по объему: ' + prop + ' литров'))
  }

  function onFilterCar(prop) {
    setBoxMass(boxArr.filter((mas) => mas.car === prop))
    setText(String('по автомобилю: ' + prop))
  }

  function onFilterColor(prop) {
    setBoxMass(boxArr.filter((mas) => mas.boxColor === prop))
    setText(String('по цвету: ' + prop))
  }

  function onFilterClear() {
    setBoxMass(boxArr)
    setText('')
  }

  return (
    <Container className="UnderHeader">
      <Filter
        onFilterValue={onFilterValue}
        onFilterClear={onFilterClear}
        onFilterCar={onFilterCar}
        onFilterColor={onFilterColor}
        boxArr={boxArr}
        textFilterBy={text}
      />

      {boxMass.map((box, index) => {
        return (
          <Card
            id={index}
            key={box.id}
            boxValue={box.boxValue}
            boxColor={box.boxColor}
            car={box.car}
            url={box.url}
            openClose={openClose}
            boxMass={boxMass}
          />
        )
      })}
    </Container>
  )
}

export default Cards
