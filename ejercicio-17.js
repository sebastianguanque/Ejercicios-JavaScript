// 17) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"

function textoRecortado(texto) { 
  let num = Number(prompt("Ingrese un número"));
  if(typeof num === "string") {
    let resultado = texto.slice(0, num)
    console.log(resultado);
  } else{
    console.log('No se ingreso ningún número.')
  }
}

let oracion = prompt("Ingrese una cadena de texto: ")
if(typeof oracion === 'string') {
  textoRecortado(oracion);
} else {
  console.log('El texto ingresado es incorrecto.')
}
