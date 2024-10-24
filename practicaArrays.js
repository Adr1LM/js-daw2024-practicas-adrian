//Ejercicio1
const paises = ['España', 'Francia', 'Alemania', 'Italia'];
console.log(paises);
delete paises[0];
console.log(paises);

//Ejercicio2-----------------------------------------------------
let letras = [];
letras.unshift('A', 'B', 'C');
letras.push('D', 'E');
letras.shift();
letras.pop();
console.log(letras);

//Ejercicio3-----------------------------------------------------
let data = [
  { name: 'Nacho', telephone: '966112233', age: 40 },
  { name: 'Ana', telephone: '911223344', age: 35 },
  { name: 'Mario', phone: '611998877', age: 15 },
  { name: 'Laura', telephone: '633663366', age: 17 },
];
data.push(
  { name: 'Pedro', telephone: '611944444', age: 25 },
  { name: 'Julia', phone: '633232323', age: 37 }
);
// Ordenar por la propiedad 'age'
data.sort((a, b) => a.age - b.age);
console.log(data);

// Función para ordenar ascendentemente según la clave (key)
function ordenarAsc(data, key) {
  data.sort(function (a, b) {
    if (a[key] > b[key]) {
      return 1;
    } else if (a[key] < b[key]) {
      return -1;
    } else {
      return 0;
    }
  });
}

ordenarAsc(data, 'name');
console.log(data);

//Vector con solo los mayores de 30:
datafiltrado = data.filter(function (objeto) {
  return objeto.age > 30;
});
console.log(datafiltrado);

//Ejercicio4---------------------------------------------------------------

let numeros = [2, 5, 1, 77, 88, 32];
let [x, y, ...nuevo] = numeros;
console.log(x, y);
console.log(nuevo);

//Ejercicio5---------------------------------------------------------------

let numeros2 = [7, 5, 11, 77, 71, 5, 11, 7, 99, 112];
const numerosEnSet = new Set(numeros2);
let arraySinDuplicados = [...numerosEnSet];
console.log(arraySinDuplicados);

//Ejercicio6---------------------------------------------------------------

const mapa = new Map();
mapa.set('adri', 37);
mapa.set('jose', 29);
mapa.set('edu', 65);
mapa.set('ramon', 33);

console.log(mapa);

mapa.set('adri', 20);

console.log(mapa);

//Ejercicio7---------------------------------------------------------------

for (i = 1; i < 51; i++) {
  const combinacion = new Set();

  while (combinacion.size < 6) {
    let numero = Math.floor(Math.random() * 49) + 1;
    combinacion.add(numero);
  }
  combinacion.sort;
  console.log('combinacion: ' + i);
  console.log(combinacion);
}

//Ejercicio8---------------------------------------------------------------

let frecuencias = new Array(10).fill(0);

// Generar números aleatorios y contar frecuencias
for (let i = 0; i < 10000; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  frecuencias[numeroAleatorio - 1]++; // Incrementar el contador correspondiente
}

// Mostrar las frecuencias en la consola
console.log('Frecuencias');
for (let j = 0; j < frecuencias.length; j++) {
  console.log(`Número ${j + 1}: ${frecuencias[j]}`);
}
