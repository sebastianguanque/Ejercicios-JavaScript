// 27) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function parImpar(numero) {
  if(numero % 2 === 0) {
    console.log(`El número ${numero} es par`)
  } else if( numero % 1 === 0) {
    console.log(`El número ${numero} es impar`)
  }
}

let num = Number(prompt('Ingrese un número: '));
parImpar(num)