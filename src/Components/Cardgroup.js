import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Cardd({ boxValue, boxColor, car, url, openClose, id }) {
  return (
    <>
      <Card className="Card">
        <Card.Img
          variant="top"
          className="Cardpicture"
          src={url}
          alt="Some picture"
        />
        <Card.Body>
          <Card.Title>
            Автобокс: {boxValue} литров, цвет: {boxColor}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Бокс установлен на автомобиле {car}
          </small>
        </Card.Footer>
      </Card>
    </>
  )
}
