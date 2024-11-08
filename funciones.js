(function () {
  let contador = 0;
  contador++;
  console.log('Contador dentro de la función:', contador);
})();
try {
  console.log('Contador fuera de la función:', contador);
} catch (error) {
  console.log(
    "Error al acceder a 'contador' fuera de la función:",
    error.message
  );
}

(function (cadena, numero) {
  cadena = 'hola';
  numero = 5;

  console.log(cadena + numero);
})();

const numeros = [1, 2, 3, 4, 4, 67, 8, 5, 7, 8];
let sumatorio = 0;
for (let i = 0; i < numeros.length; i++) {
  sumatorio += numeros[i];
}
console.log(sumatorio);
