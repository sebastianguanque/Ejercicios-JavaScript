// 19) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto) {

  let num = Number(prompt('Ingresa el número a repetir: '))

  if(typeof num === 'number') {

    let resultado = texto.repeat(num)
    console.log(resultado) 
  } else {
    console.log('No se ingreso un número.')
  } 
  
}

let texto = prompt('Ingresa un texto para repetir')
if(typeof texto === 'string') {
  repetirTexto(texto)
} else {
  console.log('No se ingreso una cadena de texto.')
}