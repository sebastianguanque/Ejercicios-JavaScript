// 40) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function numeros(promedio) {
  const sumatoria = promedio.reduce((acc, curr) => acc + curr)
  console.log(sumatoria)
  const result = sumatoria / (promedio.length)
  console.log(result)
}

let num = [9,8,7,6,5,4,3,2,1,0]
numeros(num)