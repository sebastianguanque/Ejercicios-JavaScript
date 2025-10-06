const { miInformacion } = require("../ejercicio-13.1");

describe("Diccionario de información personal", () => {
  test("Debe contener todas las claves requeridas", () => {
    const clavesRequeridas = [
      "name",
      "age",
      "birth_date",
      "programming_languages",
    ];
    clavesRequeridas.forEach((clave) => {
      expect(miInformacion).toHaveProperty(clave);
    });
  });

  test("La clave 'programming_languages' debe ser un Array (Lista)", () => {
    // 1. Verificar que el valor es un Array
    expect(Array.isArray(miInformacion.programming_languages)).toBe(true);

    // 2. Verificar que al menos tiene un elemento
    expect(miInformacion.programming_languages.length).toBeGreaterThan(0);
  });

  test("Los datos deben ser correctos", () => {
    expect(miInformacion.name).toBe("Sebastián");
    expect(miInformacion.age).toBe(20);
    expect(miInformacion.birth_date).toBe("01/09/1997");
    expect(miInformacion.programming_languages).toEqual([
      "JavaScript",
      "Python",
      "SQL",
      "Vue.js",
    ]);
  });
});
