/*
Planteamiento
Se va restando al número inicial de mayor a menor todos los número romanos sucesivamente a la vez que se construye la cadena de conversión. Con este planteamiento de ir reduciendo el número, existen dos variantes de reducción: una la del propio número romano a reducir (M, D, C, L, X,...) y otra la del número romano junto a su factor decimal por delante (CM, CD, XC, XL,...).

Todo esto lo podemos hacer en base a sentencia 'while' continuas que es como lo había hecho inicialmente. Pero al finalizar el programa he visto que se estas sentencias 'while' se repetían de igual manera con el número decimal a reducir y su cadena equivalente de número romano. Por ello he creado una segunda versión que tomando como base una array de arrays con los pares decimal y cadena romana equivalente, va iterando sobre el número. Es una forma mas abstracta y de menor código que la primera.

Desarrollo:

Dificultad: comprender que la conversión a número romanos nos es más que la reducción iterativa de las cantidades que representan los números romanas y la cantidad de cada uno de ellos junto a su factor decimal correspondiente.

Duda: Dejar la primera versión del programa construido con la sucesiva repetición de sententcias 'while' o construir un array de array con los pares de las distintas reducciones e ir iterando sobre ellos.

Dificultad: Lograr acceder al array de arrays con un doble índice. No he acertado al principio al no darme cuenta en que se convierte en una matriz de doble dimensión y por lo tanto siempre que nos referimos a su contenido hay que hacerlo con un doble índice.
*/

function NumerosRomanosB(num) {
// Comprobamos que el parámetro pasado es un número y se puede convertir al ser menor que 3.9999.
  if (!Number(num)) {
    return console.log("El parámetro pasado " + num + " no es un número.");
  }
  if (num > 3999) {
    return console.log("El número " + num + " es demasiado grande para convertir."); 
  }
if (num < 1) { alert('Number is too small!'); return false; }
// Definimos el array de array con los pares de las equivalencias para ir reduciendo el número
  let equivalencias = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  let romanos = "";
// 
  for (let i = 0; i < equivalencias.length; i++) {
    while (num >= equivalencias[i][1]) {
      num -= equivalencias[i][1];
      romanos += equivalencias[i][0];
    }
  }
  return romanos;
}

function NumerosRomanosA(num) {
// Comprobamos que el parámetro pasado es un número o se puede convertir.
  if (!Number(num)) {
    return console.log("El parámetro pasado " + num + " no es un número.");
  }
  let romanos = "";
  while (num >= 1000) {
    num -= 1000;
    romanos += "M";
  }
  while (num >= 900) {
    num -= 900;
    romanos += "CM";
  }
  while (num >= 500) {
    num -= 500;
    romanos += "D";
  }
  while (num >= 400) {
      num -= 400;
      romanos += "CD";
  }
  while (num >= 100) {
    num -= 100;
    romanos += "C"
  }
  while (num >= 90) {
    num -= 90;
    romanos += "XC"
  }
  while (num >= 50) {
    num -= 50;
    romanos += "L";
  }
  while (num >= 40) {
      num -= 40;
      romanos += "XL";
  }
  while (num >= 10) {
    num -= 10;
    romanos += "X"
  }
  while (num >= 9) {
    num -= 9;
    romanos += "IX"
  }
  while (num >= 5) {
    num -= 5;
    romanos += "V";
  }
  while (num >= 4) {
      num -= 4;
      romanos += "IV";
  }
  while (num >= 1) {
    num -= 1;
    romanos += "I"
  }
  return romanos;
}

console.log(NumerosRomanosA(1999));
console.log(NumerosRomanosB(1999));