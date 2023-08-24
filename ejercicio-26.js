// 26) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function numeroPrimo(numero) {
  
  if (numero <= 1) {
    console.log(`El número ${numero} no es primo`);
  }

  for (let i = 2; i <= numero; i++) {
    if (numero % i === 0) {
      console.log(`El número ${numero} no es un número primo`);
      break;
    }
    console.log(`El número ${numero} es un número primo`);
    break;
  }
}

let num = Number(prompt('Ingrese un numero: '));

numeroPrimo(num);    