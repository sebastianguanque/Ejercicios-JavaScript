// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function numCarac(texto) {
  if(typeof texto === 'string') {
    console.log(texto.length);
  } else {
    console.log('No es una cadena de texto')
  }
}

let texto = ("Ingrese una cadena de texto");

numCarac(texto)