// EJERCICIO 1 Y 2 Creación del objeto persona con ambos métodos desde el inicio
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',

  // Método para presentarse
  presentarse: function () {
    return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`;
  },

  // Método para incrementar la edad
  cumplirAnios: function () {
    this.edad += 1;
  },
};

// Llamada al método presentarse e impresión en la consola
console.log(persona.presentarse());

// Llamada al método cumplirAnios
persona.cumplirAnios();

// Imprimir la edad actualizada en la consola
console.log(`Edad actualizada: ${persona.edad}`);

// EJERCICIO 3 Creación del objeto libro
const libro = {
  titulo: 'Cien Años de Soledad',
  autor: 'Gabriel García Márquez',
  paginas: 417,
  añoPublicacion: 1967,
};

// Bucle para recorrer todas las propiedades del objeto libro
for (let propiedad in libro) {
  console.log(`${propiedad}: ${libro[propiedad]}`);
}

// EJERCICIO 4 Función constructora Coche
function Coche(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  // Método para obtener los detalles del coche
  this.detalles = function () {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
  };
}

// Creación de dos instancias de Coche
const coche1 = new Coche('Toyota', 'Corolla', 2020);
const coche2 = new Coche('Honda', 'Civic', 2018);

// Llamada al método detalles para cada instancia e impresión en la consola
console.log(coche1.detalles());
console.log(coche2.detalles());

//EJERCICIO 5 Añadir el método encender al prototipo de Coche
Coche.prototype.encender = function () {
  console.log(`El coche ${this.marca} ${this.modelo} ha sido encendido`);
};

// Llamada al método encender en una de las instancias
coche1.encender();
coche2.encender();
