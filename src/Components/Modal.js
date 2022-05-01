import React, { useEffect, useState, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../Modal.css'

function Modal({ boxMass, openClose, selectedPhoto }) {
  return (
    <div className="modal">
      <Carousel
        className="modal-body"
        fade
        interval={null}
        defaultActiveIndex={selectedPhoto}
      >
        {boxMass.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <button className="modal-button" onClick={() => openClose()}>
                Close
              </button>
              <img
                className="d-block w-100 modal-img"
                src={item.url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>
                  Размер бокса: {item.boxValue} литров, цвет: {item.boxColor}
                </h3>
                <p>на автомобиле {item.car}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Modal
