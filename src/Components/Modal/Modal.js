import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Modal.css'

function Modal({ boxMass, selectedPhoto }) {
  return (
    <div className="modal-back">
      <div className="modal-body">
        <Carousel fade interval={null} defaultActiveIndex={selectedPhoto}>
          {boxMass.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                <div className="modal-block">
                  <img
                    className="d-block w-100"
                    src={item.url}
                    alt="Some slide"
                  />
                </div>
                <Carousel.Caption>
                  <h2 className="modal-text">
                    Размер бокса: {item.boxValue} литров, цвет: {item.boxColor}
                  </h2>
                  <h4 className="modal-text">на автомобиле {item.car}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>
    </div>
  )
}

export default Modal
