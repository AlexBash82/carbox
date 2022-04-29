import React from 'react'
import Card from 'react-bootstrap/Card'
import logo from './logo512.png'

function Cardd({ boxValue, boxColor, car }) {
  return (
    <div>
      <Card className="bg-light text-black Cardpicture">
        <Card.Img src={logo} alt="Card image" />
        <Card.ImgOverlay className="card-img-overlay">
          <Card.Title className="Cardtitle">
            Размер бокса: {boxValue} литров, цвет: {boxColor}
          </Card.Title>
          <Card.Text className="Cardtext">на автомобиле {car} </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Cardd
