import React, { useState, useRef } from 'react'
import { Container } from 'react-bootstrap'

import Cardgroup from './Cardgroup'

import boxArr from '../BaseLogic'
import Filter from './Filter'
import Modal from './Modal'

function Cards() {
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

  const [show, setShow] = useState(false)
  const selectedPhoto = useRef('')

  function openClose(item) {
    selectedPhoto.current = item
    console.log(!show)

    setShow(!show)
  }

  return (
    <Container>
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
          <Cardgroup
            id={index}
            key={box.id}
            boxValue={box.boxValue}
            boxColor={box.boxColor}
            car={box.car}
            url={box.url}
            openClose={openClose}
          />
        )
      })}
      {show && (
        <Modal
          boxMass={boxMass}
          openClose={openClose}
          selectedPhoto={selectedPhoto.current}
        />
      )}
    </Container>
  )
}

export default Cards
