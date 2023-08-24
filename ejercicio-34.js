// 34) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function validarEmail(email) {
  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
  return(expReg) ? console.log(email) : console.log('Email ingresado incorrectamente')
}

let email = prompt('Ingrese un email: ')
validarEmail(email)