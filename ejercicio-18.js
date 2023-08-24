// 18) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function toArray(array) {
  let newArray = array.split(' ');
  console.log(newArray)
}

let array = prompt('Ingrese una oración: ')
toArray(array)