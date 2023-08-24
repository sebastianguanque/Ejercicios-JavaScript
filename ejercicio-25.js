// 25) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(numero) {
  if (numero == 0 || numero == 1) {
    numero = 1;
    console.log(numero);
  } else if(numero < 0) {
    console.log('El número debe ser positivo');
  } else {
    for (let i = numero; i > 1; i--) {
      numero = numero * (i - 1);
    }
    console.log(numero)
  }
  
}

let num = Number(prompt('Ingrese un número: '))
factorial(num)