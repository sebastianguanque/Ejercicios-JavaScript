/*
 * EJERCICIO:
 * Utilizando tu lenguaje crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
 */

// Crear un conjunto de datos (array)
let conjunto = [1, 2, 3, 4, 5];

// Añadir un elemento al final
conjunto.push(6);
console.log("Después de añadir al final:", conjunto);

// Añadir un elemento al principio
conjunto.unshift(0);
console.log("Después de añadir al principio:", conjunto);

// Añadir varios elementos en bloque al final
conjunto.push(7, 8, 9);
console.log("Después de añadir varios al final:", conjunto);

// Añadir varios elementos en bloque en una posición concreta (índice 3)
conjunto.splice(3, 0, "a", "b", "c");
console.log("Después de añadir varios en posición concreta:", conjunto);

// Eliminar un elemento en una posición concreta (índice 4)
conjunto.splice(4, 1);
console.log("Después de eliminar en posición concreta:", conjunto);

// Actualizar el valor de un elemento en una posición concreta (índice 2)
conjunto[2] = "actualizado";
console.log("Después de actualizar en posición concreta:", conjunto);

// Comprobar si un elemento está en el conjunto (buscar 'b')
let existe = conjunto.includes("b");
console.log("¿El elemento 'b' está en el conjunto?", existe);

// Eliminar todo el contenido del conjunto
conjunto.length = 0;
console.log("Después de eliminar todo el contenido:", conjunto);

// DIFICULTAD EXTRA: Operaciones con conjuntos
let conjuntoA = new Set([1, 2, 3, 4]);
let conjuntoB = new Set([3, 4, 5, 6]);

// Unión
let union = new Set([...conjuntoA, ...conjuntoB]);
console.log("Unión:", union);

// Intersección
let interseccion = new Set([...conjuntoA].filter((x) => conjuntoB.has(x)));
console.log("Intersección:", interseccion);

// Diferencia (A - B)
let diferencia = new Set([...conjuntoA].filter((x) => !conjuntoB.has(x)));
console.log("Diferencia (A - B):", diferencia);

// Diferencia simétrica
let diferenciaSimetrica = new Set(
  [...union].filter((x) => !interseccion.has(x))
);
console.log("Diferencia simétrica:", diferenciaSimetrica);
