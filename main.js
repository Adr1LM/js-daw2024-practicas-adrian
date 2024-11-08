// main.js

// Función para pedir palabras al usuario
function pedirPalabras() {
  var palabras = [];
  var palabra;

  // Pedir palabras hasta que el usuario deje el prompt vacío o lo cancele
  do {
    palabra = prompt('Ingresa una palabra (o deja vacío para terminar):');
    if (palabra) {
      palabras.push(palabra.trim()); // Agregar palabra sin espacios adicionales
    }
  } while (palabra);

  return palabras;
}

// Función para mostrar el resultado en una alerta
function mostrarResultado(mensaje) {
  alert(mensaje);
}
