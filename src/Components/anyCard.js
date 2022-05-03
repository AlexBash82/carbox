import React from 'react'
import Card from 'react-bootstrap/Card'

function Cardd({ boxValue, boxColor, car, url }) {
  return (
    <>
      {url ? (
        <Card className="bg-light text-black Cardpicture">
          <Card.Img src={url} alt="Card image" />
          <Card.ImgOverlay className="card-img-overlay">
            <Card.Title className="Cardtitle">
              Размер бокса: {boxValue} литров, цветfffffffff: {boxColor}
            </Card.Title>
            <Card.Text className="Cardtext">на автомобиле {car} </Card.Text>
          </Card.ImgOverlay>
        </Card>
      ) : null}
    </>
  )
}

export default Cardd
