/*
Planteamiento:
Todo pasa por primer lugar lograr el número de horas completas, como un número entero, y posteriormente el número de minutos como el resto de la división por 60. A partir de ahí lo siguiente es convertir esos números a cadena de caracteres, con la pequeña problemática de cómo añadir 0 si los minutos es una única cifra.

Desarrollo:

Duda: Controlar el parámetro de entrada de la función para asegurarnos que es un número.
Dificultad: Encontrar la función de Javascript que nos devuelve el redondeo de un número decimal con su entero 'por abajo'.
Duda: Llamar a una función de relleno de caracteres o no para añadir el 0 a los minutos de una cifra. Al ser una operativa tan simple y concreta hemos preferido realizar el añadido del 0 de forma directa.
Dificultad: La conversión directa en una misma instrucción del número de minutos a una cadena de caracteres a través de la interpretación interna con `${...}`
*/
function Conversor(TiempoMinutos) {
// Comprobamos que el parámetro pasado es un número o se puede convertir.
  if (!Number(TiempoMinutos)) {
    return console.log("El parámetro pasado " + TiempoMinutos + " no es un número.");
  }
// Calculamos el entero 'por debajo' más próximo para calcular las horas.
  let horas = Math.floor(TiempoMinutos / 60);
// Calculamos el número minutos a través del operador división resto y lo convertimos directamente a string a traves de '${...}'
  let minutos = `${TiempoMinutos % 60}`;
// Si la cifra de minutos es de una cifra le añadimos el 0 por delante.
  if (minutos.length == 1) {minutos = "0" + minutos};
  return horas + ":" + minutos;
}
console.log(Conversor("126"));