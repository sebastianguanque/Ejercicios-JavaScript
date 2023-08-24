// 37) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function separarParesImpares(arr) {
  const resultado = {
    pares: [],
    impares: []
  };

  for (let num of arr) {
    if (num % 2 === 0) {
      resultado.pares.push(num);
    } else {
      resultado.impares.push(num);
    }
  }

  return resultado;
}

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const resultado = separarParesImpares(arrayNumeros);
console.log(resultado);