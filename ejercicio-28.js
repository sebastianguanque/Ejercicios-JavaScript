// 28) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function celsius(grados) {
  let result = ((grados * 9/5) + 32).toFixed(1)
  console.log(`${grados}°C es igual a  ${result}°F`)
}
function fahrenheit(grados) {
  let result = ((grados - 32) * 5/9).toFixed(1)
  console.log(`${grados}°F es igual a ${result}°C`)
}

let conversion;
let eleccion = Number(prompt('1. Celsius 2.Fahrenheit'));
if(eleccion == 1) {
  conversion = Number(prompt('Cuantos grados de Celsius a Fahrenheit desea convertir'))
  celsius(conversion)
} else if(eleccion == 2) {
  conversion = Number(prompt('Cuantos grados de Fahrenheit a Celsius desea convertir'))
  fahrenheit(conversion)
} else {
  console.log('Número ingresado incorrecto.')
}