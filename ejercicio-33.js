// 33) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function validarNombre(nombre) {
  let expReg = /^[A-Za-zÑñáÁéÉíÍÓóÚú\s]+$/g.test(nombre);
  return(expReg) ? console.log(nombre) : console.log('Nombre ingresado incorrectamente')
}

let nombre = prompt('Ingrese un nombre: ')
validarNombre(nombre)
