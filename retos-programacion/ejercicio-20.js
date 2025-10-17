/*
 * EJERCICIO:
 * Utilizando un mecanismo de peticiones HTTP de tu lenguaje, realiza
 * una petición a la web que tú quieras, verifica que dicha petición
 * fue exitosa y muestra por consola el contenido de la web.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la PokéAPI (https://pokeapi.co), crea un programa por
 * terminal al que le puedas solicitar información de un Pokémon concreto
 * utilizando su nombre o número.
 * - Muestra el nombre, id, peso, altura y tipo(s) del Pokémon
 * - Muestra el nombre de su cadena de evoluciones
 * - Muestra los juegos en los que aparece
 * - Controla posibles errores
 */

const https = require("https");

function hacerPeticion(url) {
  https
    .get(url, (res) => {
      let data = "";

      // Verificar que la petición fue exitosa
      if (res.statusCode !== 200) {
        console.error(
          `Error: La petición falló con el código de estado ${res.statusCode}`
        );
        res.resume(); // Consumir respuesta para liberar memoria
        return;
      }

      // Recibir datos en fragmentos
      res.on("data", (chunk) => {
        data += chunk;
      });

      // Cuando se complete la recepción de datos
      res.on("end", () => {
        console.log("Contenido de la web:");
        console.log(data);
      });
    })
    .on("error", (e) => {
      console.error(`Error en la petición: ${e.message}`);
    });
}

// Ejemplo de uso
const url = "https://www.example.com";
hacerPeticion(url);

// Difucultad extra

import { get } from "https";

function hacerPeticion(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      const { statusCode } = res;
      let data = "";

      // Verificar que la petición fue exitosa
      if (statusCode !== 200) {
        reject(new Error(`Request Failed. Status Code: ${statusCode}`));
        res.resume(); // Consumir respuesta para liberar memoria
        return;
      }

      // Recopilar datos
      res.on("data", (chunk) => {
        data += chunk;
      });

      // Finalizar la recopilación de datos
      res.on("end", () => {
        resolve(data);
      });
    }).on("error", (e) => {
      reject(e);
    });
  });
}

// Ejemplo de uso
const url2 = "https://pokeapi.co/api/v2/pokemon/pikachu";

hacerPeticion(url2)
  .then((data) => {
    const pokemon = JSON.parse(data);
    console.log(`Nombre: ${pokemon.name}`);
    console.log(`ID: ${pokemon.id}`);
    console.log(`Peso: ${pokemon.weight}`);
    console.log(`Altura: ${pokemon.height}`);
    console.log(`Tipo(s): ${pokemon.types.map((t) => t.type.name).join(", ")}`);
  })
  .catch((error) => {
    console.error(`Error al hacer la petición: ${error.message}`);
  });
