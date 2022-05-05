import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Cardd({
  boxValue,
  boxColor,
  car,
  url,
  openModal,
  id,
  boxMass,
}) {
  return (
    <div className="Cards">
      <Card className="Card" onClick={() => openModal(id, boxMass)}>
        <div className="Carddiv">
          <Card.Img variant="top" src={url} alt="Carbox" className="Cardimg" />
        </div>
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
    </div>
  )
}
