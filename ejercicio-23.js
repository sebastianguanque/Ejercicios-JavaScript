// 23) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function numeroAleatorio() {
  const numAleatorio = 500 + Math.floor(Math.random()*100)
  
  console.log(numAleatorio)
}

numeroAleatorio()