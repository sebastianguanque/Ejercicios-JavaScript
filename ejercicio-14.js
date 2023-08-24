// Realizar una función que solicita una carga de dos enteros y nos muestre de uno en uno desde el menor hasta el mayor. 

function entero() {
  if (num1 > num2) {
    document.write("El número mayor es: " + num1);
  }

  else if (num2 > num1) {
    document.write("El número mayor es: " + num2);
  }

  else {
    document.write("No existe número mayor.");
  }
}

let num1 = Number(prompt("Ingrese un número: "));
let num2 = Number(prompt("Ingrese otro número: "));

entero(num1, num2);