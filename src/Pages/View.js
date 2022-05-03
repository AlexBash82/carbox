import React, { useState, useRef } from 'react'
import Cards from '../Components/Cards'
import Header from '../Components/Header'
import Modal from '../Components/Modal'

export default function View() {
  const [show, setShow] = useState(false)
  const selectedPhoto = useRef('')
  const boxMass = useRef([])

  function openModal(id, arr) {
    selectedPhoto.current = id
    boxMass.current = arr
    setShow(true)
  }

  function closeModal() {
    setShow(false)
  }

  return (
    <div>
      <Header show={show} closeModal={closeModal} />
      <Cards openModal={openModal} />
      {show && (
        <Modal
          boxMass={boxMass.current}
          selectedPhoto={selectedPhoto.current}
        />
      )}
    </div>
  )
}
