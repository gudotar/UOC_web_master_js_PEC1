/*
Planteamiento:
El planteamiento inicial parte de pensar que en palíndromo es algo simétrico, como una hoja que si la doblas por la mitad las dos partes que quedan son iguales. Una buena idea por lo tanto es ir comparando carácter a carácter si estas dos partes son iguales. 

Pero antes de la comparación hay que desnudar el texto de: espacios en blanco, maýusculas, tildes,... para así comparar únicamente letras minúsculas con letras minúsculas.

Desarrollo:

Corrección: Tener en cuenta el índice de array comienza en 0.
Dificultad: Buscar expresión regular para sustituir espacios en blanco.
Corrección: Creación de array de arrays con strings. Olvidado añadir comillas.
Duda: Crear otra expresa función para desnudar el string de espacios, minúsculas y tildes. Como es una funcionalidad muy relacionada con la operativa de palíndromo he optado por no separarla.

*/

function palindromo (string) {
// Quitamos espacios.
  string = string.replace(/\s+/g, '');
// Convertimos a minúsculas.
  string = string.toLowerCase();
// Creamos un array de array con los pares de vocales con y sin tilde.
  let quitaAcentos = [["á", "a"], ["é", "e"], ["í", "i"], ["ó", "o"], ["ú", "u"]];
// Para cada par de vocales...
  for (let vocal of quitaAcentos) {
// ... sustituímos la vocal con tilde por la vocal sin.
    string = string.replace(vocal[0], vocal[1]);
  }
// Comparamos las dos mitades del string si todos sus caracteres son iguales.
  for (let i = 0; i < string.length/2; i++) {
// Si algún carácter es distinto se devuelve 'false' y se acaba.
    if (string[i] != string[string.length - 1 - i]) return false;
  }
// Si hemos llegado aquí es que todos los caracteres de las dos mitades son iguales.
  return true;
}

console.log(palindromo("Dábale arroz a la zorra el abad"));