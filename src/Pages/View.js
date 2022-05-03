import React, { useState, useRef } from 'react'
import Cards from '../Components/Cards'
import Header from '../Components/Header'
import Modal from '../Components/Modal'

export default function View() {
  const [show, setShow] = useState(false)
  const selectedPhoto = useRef('')
  const boxMass = useRef([])

  function openClose(id, arr) {
    selectedPhoto.current = id
    boxMass.current = arr
    setShow(!show)
  }
  return (
    <div>
      <Header show={show} openClose={openClose} />
      <Cards openClose={openClose} />
      {show && (
        <Modal
          boxMass={boxMass.current}
          selectedPhoto={selectedPhoto.current}
        />
      )}
    </div>
  )
}
