// Paso 0: Importar la función que vamos a probar
const { suma } = require("../ejercicio-13");

// Paso 2: Escribir los casos de prueba

// El bloque 'test' define una prueba unitaria específica
test("Debe sumar 5 y 3 para obtener 8", () => {
  // 1. ARRANGEMENT (Preparar)
  const numero1 = 5;
  const numero2 = 3;
  const resultadoEsperado = 8;

  // 2. ACT (Actuar/Ejecutar)
  const resultadoObtenido = suma(numero1, numero2);

  // 3. ASSERT (Afirmar/Comprobar)
  // Jest usa la función 'expect()' para el valor obtenido
  // y un 'matcher' (como 'toBe()') para compararlo con el valor esperado.
  expect(resultadoObtenido).toBe(resultadoEsperado);
});

// Puedes tener otro test para otro caso (por ejemplo, números negativos)
test("Debe sumar números negativos correctamente", () => {
  expect(suma(-10, 5)).toBe(-5);
});

test("Debe sumar 0 correctamente", () => {
  expect(suma(0, 0)).toBe(0);
  expect(suma(0, 5)).toBe(5);
  expect(suma(5, 0)).toBe(5);
});
