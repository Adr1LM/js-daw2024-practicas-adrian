var a = 99,
  b = 98;
if (a % 3 == 0) console.log(a + ' es múltiplo de 3');
if (b % 2 == 0) {
  console.log(b + ' es par');
  console.log(b + ' es múltiplo de 2');
}

var b = 98;
if (b % 2 == 0) {
  console.log(b + ' es par');
  console.log(b + ' es múltiplo de 2');
} else {
  console.log(b + ' es impar');
}

var b = 54;
if (b % 4 == 0) {
  console.log(b + ' es divisible por 4');
  console.log(b + ' es par');
} else if (b % 3 == 0) {
  console.log(b + ' es divisible por 3');
} else if (b % 2 == 0) {
  console.log(b + ' es divisible por 2');
  console.log(b + ' es par');
} else {
  console.log('otro caso');
}

var prueba = 4;
