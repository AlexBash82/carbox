// import React, { useState, useEffect } from 'react'
import React from 'react'
import Cards from './Components/Cards.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import boxMass from './Database/boxMass.js'

function App() {
  // const [boxMass, setBoxMass] = React.useState([])

  // let boxMass = () => {
  //   fetch('./Database/Boxes.json')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       return json
  //     })
  // }

  // useEffect(() => {
  //   fetch('./Database/Boxes.json')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setBoxMass(json)
  //     })
  // }, [])

  return (
    <div>
      <Cards boxMass={boxMass} />
    </div>
  )
}

export default App
