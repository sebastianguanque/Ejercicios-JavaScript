// 36) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function ordernarNumeros(numeros) {
  const numOrden = numeros.sort((num1, num2) => num2 - num1)
  const result = [numOrden[0], numOrden[numOrden.length-1]]

  console.log(result)
}

let num = [1,4,5,99,-60]
ordernarNumeros(num)