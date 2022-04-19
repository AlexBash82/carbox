import React from 'react'
import Card from 'react-bootstrap/Card'
import logo from './logo512.png'

const styles = {
  picture: {
    width: '25%',
    float: 'left',
  },
  text: {},
  card: {},
}

function Cardd({ boxValue, boxColor, car }) {
  return (
    <div>
      <Card className="bg-light text-black" style={styles.picture}>
        <Card.Img src={logo} alt="Card image" />
        <Card.ImgOverlay className="card-img-overlay">
          <Card.Title>
            Размер бокса: {boxValue} литров, цвет: {boxColor}
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text style={styles.text}>на автомобиле {car} </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}

export default Cardd
