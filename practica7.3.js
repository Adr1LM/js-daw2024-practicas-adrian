// Función constructora para Ordenador
function Ordenador(
  marca,
  modelo,
  memoriaRAM = 4,
  capacidadDiscoDuro = 512,
  pulgadasPantalla = 17
) {
  this.marca = marca;
  this.modelo = modelo;
  this.memoriaRAM = memoriaRAM;
  this.capacidadDiscoDuro = capacidadDiscoDuro;
  this.pulgadasPantalla = pulgadasPantalla;
}

// Método toString para la clase Ordenador
Ordenador.prototype.toString = function () {
  return `Ordenador: ${this.marca} ${this.modelo}\nMemoria RAM: ${this.memoriaRAM} GB\nCapacidad de disco duro: ${this.capacidadDiscoDuro} GB\nPantalla: ${this.pulgadasPantalla} pulgadas`;
};

// Función constructora para Portátil que hereda de Ordenador
function Portatil(
  marca,
  modelo,
  memoriaRAM,
  capacidadDiscoDuro,
  pulgadasPantalla,
  autonomia = 4
) {
  // Llamada al constructor de Ordenador
  Ordenador.call(
    this,
    marca,
    modelo,
    memoriaRAM,
    capacidadDiscoDuro,
    pulgadasPantalla
  );

  // Añadir la propiedad autonomía
  this.autonomia = autonomia;
}

// Heredar los métodos de Ordenador
Portatil.prototype = Object.create(Ordenador.prototype);

// Método toString para la clase Portátil, sobrescribe el de Ordenador
Portatil.prototype.toString = function () {
  return `${Ordenador.prototype.toString.call(this)}\nAutonomía: ${
    this.autonomia
  } horas`;
};

// Pruebas

// Crear un ordenador
const ordenador1 = new Ordenador('HP', 'Pavilion', 8, 1024, 15);
console.log(ordenador1.toString());

// Crear un portátil
const portatil1 = new Portatil('Apple', 'MacBook Pro', 16, 512, 13, 10);
console.log(portatil1.toString());

// Crear otro portátil con valores por defecto
const portatil2 = new Portatil('Dell', 'XPS 13');
console.log(portatil2.toString());
