// Añadir el método media al prototipo de Array
Array.prototype.media = function () {
  // Validar si el array no está vacío
  if (this.length === 0) {
    return 0; // Retornar 0 si el array está vacío
  }

  // Usar reduce para sumar todos los elementos y luego dividir por la longitud del array
  const suma = this.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
  );
  return suma / this.length; // Retornar la media aritmética
};

// Prueba de funcionamiento

// Crear un array de números
const numeros = [10, 20, 30, 40, 50];

// Calcular la media de los elementos en el array
const mediaNumeros = numeros.media();

// Mostrar el resultado
console.log(`La media de los números es: ${mediaNumeros}`);

// Caso con un array vacío
const arrayVacio = [];
const mediaArrayVacio = arrayVacio.media();
console.log(`La media de un array vacío es: ${mediaArrayVacio}`);

// Caso con un array con números decimales
const numerosDecimales = [2.5, 3.5, 4.5, 5.5];
const mediaDecimales = numerosDecimales.media();
console.log(`La media de los números decimales es: ${mediaDecimales}`);
