// const fs = require('fs')
import boxMass from './Database/boxMass'

// fs.readFile('./Database/boxes.json', (err, data) => {
//   if (err) throw err
//   let boxMass = JSON.parse(data)
// })

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

export default boxMass
