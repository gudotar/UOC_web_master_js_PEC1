/*
Planteamiento:
Este ejercicio me ha resultado sencillo, igual también porque yo no lo he querido complicar. Simplemente tomando el string y pasando uno a uno por los caracteres que lo componen para comprobar si es un carácter de cadena ADN. En caso afirmativo se le añade su par ADN, y a continuación se introduce en el array de pares.

Desarrollo:
Dificultad: Recordar cuál es el método del objeto string utilizado para añadir elementos al final. PUSH.
Duda: Utilizar una estrutura de control 'if/else' o el constructor 'switch/case'. Para practicar la codificación me ha parecido 'if/else' más interesante, ya que son mis primerísimos pasos con Javascript.
Duda: Hacer control del dato pasado com string inicial a comprobar, por si tenía algún carácter que no es parte de cadena de ADN. Como el propio programa obvia cualquier otro tipo de carácter, no lo he aplicado.
Duda: En el enunciado no aparece que hacer si algún carácter es minúscula. Hemos optado por convertir el string a mayúsculas antes de realizar la comprobación.

*/
function basesADN(str){
// Convertimos a mayúsculas el string.
  str = str.toUpperCase();
// Inicializamos la variable cadena.
  let cadena = [];
// Por cada uno de los carácteres del string pasado...
  for (i = 0; i < str.length; i++) {
// ... comprobamos si es C, G, A o T. Si lo es añadimos el par correcto al array.
        if (str[i] == "C") {
            cadena.push(["C","G"]);
        } else {
            if (str[i] == "G") {
                cadena.push(["G","C"]);
            } else {
                if (str[i] == "A") {
                    cadena.push(["A","T"]);
                } else {
                    if (str[i] == "T") {
                        cadena.push(["T","A"]);
                    }
                }
            }
        }
    }
return cadena;
}
console.log(basesADN("GCGXAT"));