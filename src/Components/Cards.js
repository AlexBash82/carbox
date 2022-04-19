import React from 'react'
import Card from './Card'

function Cards({ boxMass }) {
  return (
    <div>
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
