// Crear un programa donde se ingresen 3 números y nos muestre el mayor de los 3.

let num1 = Number(prompt("Ingrese el primer número: "));
let num2 = Number(prompt("Ingrese el segundo número: "));
let num3 = Number(prompt("Ingrese el tercero número: "));

if (num1 > num2 && num1 > num3) {
  document.write("El número mayor es: " + num1);
}

else if (num2 > num1 && num2 > num3) {
  document.write("El número mayor es: " + num2);
}

else if (num3 > num1 && num3 > num2) {
  document.write("El número mayor es: " + num3);
}

else {
  document.write ("No existe un número mayor");
}