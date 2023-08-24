// Realizar un programa que se ingrese dos números, si el primero es mayor al segundo informar su suma y resta. De lo contrario informar el producto y la división del segundo con respecto al primero.

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num2 * num1;
let division = num2 / num1;

if (num1 > num2) {
  document.write("La suma es: " + suma + "<br>");
  document.write("La resta es: " + resta);
}

else {
  document.write("La multiplicación es: " + multiplicacion + "<br>");
  document.write("La división es: " + division);
}

