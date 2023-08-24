// Crear un programa que sume los valores ingresados hasta que se ingrese 9.999 en ese momento se finaliza la carga. 

let suma = 0;
let numero;
do {
  numero = Number(prompt("Ingrese un número, el programa termina cuando ingrese el 9999"));

  suma = suma + numero;
} while (numero != 9999);

document.write("La suma de todos los números ingresados es: " + (suma - 9999));
