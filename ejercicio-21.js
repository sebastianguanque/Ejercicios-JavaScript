// 21) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromo(frase) {
  let expReg = /[^A-Za-z0-9]/g;
  
  let texto = frase.toLowerCase().replace(expReg, '');
  
  let result = texto.split('').reverse().join('');
  
  if(result === texto) {
    console.log('La palabra es palindromo')
  } else {
    console.log('No es palindromo')
  }
}

let frase = prompt('Ingrese una oración');
palindromo(frase)