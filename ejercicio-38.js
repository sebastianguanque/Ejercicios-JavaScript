// 38) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

function numeros(numero) {
  const objNumeros = {
    asc : [],
    desc : []
  }
  let ascendente = numero.toSorted((num1, num2) => num1 - num2)
  objNumeros.asc.push(ascendente)
  let descendente = numero.toSorted((num1, num2) => num2 - num1)
  objNumeros.asc.push(descendente)

  return objNumeros
}

let num = [7,5,7,8,6]
numeros(num)