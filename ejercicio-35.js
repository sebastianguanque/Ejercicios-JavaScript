// 35) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function numerosAlCuadrado(numeros) {
  const result = numeros.map(numero => numero * numero)
  console.log(result)
}

let num = [1,4,5]

numerosAlCuadrado(num)
