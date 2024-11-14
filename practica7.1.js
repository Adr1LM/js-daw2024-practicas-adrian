// Función constructora Punto
function Punto(x, y) {
  // Validamos que las coordenadas sean números, si no lo son, asignamos 0
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;
}

// Método cambiar: cambia las coordenadas del punto
Punto.prototype.cambiar = function (x, y) {
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;
};

// Método copia: devuelve una copia del punto
Punto.prototype.copia = function () {
  return new Punto(this.x, this.y);
};

// Método suma: suma las coordenadas de dos puntos y devuelve un nuevo punto
Punto.prototype.suma = function (otroPunto) {
  // Verificamos que el argumento pasado sea una instancia de Punto
  if (otroPunto instanceof Punto) {
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
  }
  // Si no es un Punto, devolvemos un nuevo Punto con coordenadas sumadas de 0 (en caso de error)
  return new Punto(this.x, this.y);
};

// Prueba de funcionamiento

// Creamos dos puntos
const punto1 = new Punto(3, 4);
const punto2 = new Punto(1, 2);

// Mostramos las coordenadas de los puntos originales
console.log(`Punto 1: (${punto1.x}, ${punto1.y})`);
console.log(`Punto 2: (${punto2.x}, ${punto2.y})`);

// Usamos el método cambiar para cambiar las coordenadas de punto1
punto1.cambiar(5, 6);
console.log(`Punto 1 después de cambiar: (${punto1.x}, ${punto1.y})`);

// Usamos el método copia para obtener una copia de punto2
const copiaPunto2 = punto2.copia();
console.log(`Copia de Punto 2: (${copiaPunto2.x}, ${copiaPunto2.y})`);

// Usamos el método suma para sumar los dos puntos
const puntoSumado = punto1.suma(punto2);
console.log(
  `Resultado de sumar Punto 1 y Punto 2: (${puntoSumado.x}, ${puntoSumado.y})`
);

// Caso con valores no numéricos
const punto3 = new Punto('a', 5);
console.log(`Punto 3 con valores no numéricos: (${punto3.x}, ${punto3.y})`);
