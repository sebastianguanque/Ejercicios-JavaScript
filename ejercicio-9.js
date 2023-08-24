//  Ingresar en un programa tres palabras, perro gato o ratón. Y luego mostrar la palabra traducida en inglés. 

  let palabra = prompt("Ingrese un animal: Perro, gato o ratón");

  let animal = palabra.toLowerCase();

  if (animal == "gato") {
    document.write("Gato en ingles es Cat");
  }
  else if(animal == "perro"){
    document.write("Perro en ingles es Dog");
  }

  else if (animal == "raton"){
    document.write("Raton en ingles es Mouse");
  }

  else {
    document.write("La palabra ingresada es incorrecta.")
  }