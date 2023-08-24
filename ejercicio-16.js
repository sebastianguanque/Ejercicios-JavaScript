// Elaborar una función que reciba el lado de un cuadrado y muestre el perímetro.


function cuadrado() {
  let perimetro = lado * 4;

  return perimetro;
}

let lado = Number(prompt("Ingrese el lado de un cuadrado: "));

cuadrado(lado);
document.write("El primero es: " + cuadrado(lado));
