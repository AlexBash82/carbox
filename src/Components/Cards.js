import React, { useState } from 'react'
import Card from './Card'
import boxArr from '../BaseLogic'
import SideBar from './SideBar'

function Cards() {
  const [boxMass, setBoxMass] = useState(boxArr)

  function onFilterValue(prop) {
    setBoxMass(
      boxArr.filter(function (mas) {
        return mas.boxValue === prop
      })
    )
  }

  function onFilterCar(prop) {
    setBoxMass(
      boxArr.filter(function (mas) {
        return mas.car === prop
      })
    )
  }

  function onFilterColor(prop) {
    setBoxMass(
      boxArr.filter(function (mas) {
        return mas.boxColor === prop
      })
    )
  }

  function onFilterClear() {
    setBoxMass(() => {
      return boxArr
    })
  }

  return (
    <div>
      <SideBar
        onFilterValue={onFilterValue}
        onFilterClear={onFilterClear}
        onFilterColor={onFilterColor}
      />
      {boxMass.map((box) => {
        return (
          <Card
            key={box.id}
            boxValue={box.boxValue}
            boxColor={box.boxColor}
            car={box.car}
          />
        )
      })}
    </div>
  )
}

export default Cards
