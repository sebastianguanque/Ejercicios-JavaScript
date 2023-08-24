// 24) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function numeroCapicua(numero) {
  let result = numero.toString().split('').reverse().join('');
  
  if(result == numero) {
    return true
  } else {
    return false
  }
}

let num = prompt('Ingrese un número: ');
numeroCapicua(num);