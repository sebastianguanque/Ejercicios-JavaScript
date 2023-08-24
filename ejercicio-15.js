// Elaborar una función que reciba 3 enteros y muestre el menor.

function entero() {
  if (num1 < num2 && num1 < num3) {
    document.write(num1);
  }

  else if (num2 < num1 && num2 < num3) {
    document.write(num2);
  }

  else if (num3 < num1 && num3 < num2) {
    document.write(num3);
  }

  else {
    document.write("No existe un solo número que sea menor.");
  }
}

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let num3 = Number(prompt("Ingrese el tercer número: "));

entero(num1, num2, num3);