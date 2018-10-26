/*
Planteamiento:

En un principio lo que es presentado como un ejercicio de nivel sencillo me ha costado afrontarlo. Creo que el objetivo del ejercicio va hacia trabajar la desestructuración de los datos de entrada, string, en otra estructura, números, para así poder realizar el cálculo del área.

Para lograr está transformación he tenido que recurrir al uso de expresiones regulares. Parsear el string de entrada, comprobar que tiene la estructura correcta de cuatro puntos y construir un array bidimensional que contenga ya las coordenadas en formato númerico.

Me ha resultado difícil enfocar la forma del cálculo del área del rectángulo. Esta se puede hacer más compleja si las coordenadas las dan sin seguir un orden prefijado (por ejemplo coordenadas contiguas siguiendo el sentido del reloj) o sin orden. He tomado la hipótesis que las coordenadas pueden pasarse sin seguir un orden.

Las coordenadas dadas como parámetro de entrada se suponen que son de un rectángulo como lo indica en el enunciado. Realizar la comprobación de que así es se me hace muy díficil plantearla siquiera matemáticamente, con lo que más dificil implementarla en código.

Desarrollo:

Dificultad: Comprender que para parsear con exec y que devuelva los distintos resultados, hay que poner () en la expresión regular para agrupar. La expresión regular utilizada en este programa es relativamente sencilla, y aún así he tenido que tomar mi tiempo para ello. La construcción de las expresiones más complejas como las que aparecen en el material se me hace difícil entenderlas y más tener que construirlas.

Duda: la función que hace el cálculo del área tiene dos partes bien diferenciadas que es por una parte la conversión de las coordenadas string en coordenadas número y por otra parte el cálculo del área. Se podía igual separar estas dos lógicas en funciones separadas.

Duda: No sabía sin comprobar el número de coordenadas pasadas eran 4 y dar un código de error erroneo en caso de que no lo fueran. He implementado finalmente este control.

*/
function AreaRectangulo(coordString) {
    // Si no se han pasado al menos 4 coordenadas devolvemos el error.
    if (coordString.length < 3) {
        return "Sólo se han dado " + i +" coordenada.";
    }
    // Inicializamos el array que contendrá las coordenadas númericas.
    let coordNum = [];
    for (let i=0; i < coordString.length; i++) {
        // Comprobamos a través de la expresión regular si la coordenada es válida...
        result = /\((\d) (\d)\)/.exec(coordString[i])
        if(result != null) {
            coordNum.push([result[1], result[2]]);
        }
        // Si no lo es devolvemos el mensaje de error y acabamos.
        else {
            return "Coordenada " + coordString[i] + " no válida.";
        }
    }
    // Para calcular el área del rectángulo como podemos tener las coordenadas sin orden, buscamos cuáles son los coordenadas mínimas y máximas X e Y.
    let minX = coordNum[0][0];
    let maxX = coordNum[0][0];
    let minY = coordNum[0][1];
    let maxY = coordNum[0][1];
    for (i = 1; i < coordNum.length; i++) {
        if (coordNum[i][0] < minX) {minX = coordNum[i][0];}
        if (coordNum[i][0] > maxX) {maxX = coordNum[i][0];}
        if (coordNum[i][1] < minY) {minY = coordNum[i][1];}
        if (coordNum[i][1] > maxY) {maxY = coordNum[i][1];}
    }
    // En base a las coordenadas max y min X e Y cálculamos el área y devolvemos el mensaje.
    return `El área del rectángulo con coordenadas ` + coordString + ` es ${(maxX - minX) * (maxY - minY)}`;
}

console.log(AreaRectangulo(["(4 4)","(1 1)","(4 1)","(1 4)"]));