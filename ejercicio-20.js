// 20) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirTexto(texto) {
  let resultado = texto.split('').reverse().join('')
  console.log(resultado)
}

let texto = prompt('Ingresar un texto: ')
invertirTexto(texto) 