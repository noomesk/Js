//Aplica el ciclo a una lámpara que no enciende. 

function noEnciende (enciende) {
    if (enciende) {
        return "Lampara enciende"; 
    } else {
        return "Lampara no enciende"; 
    }

}

console.log (noEnciende(true));


//si llamo a la función asi, todo es más fácil:
noEnciende(true);
// proque noEnciende ya es un booleano (enciende = true;)
// yo escribí esto:
if (enciende === true)

// esto es lo más habitual y más sencillo: 
if (enciende) // esto pregunta: ¿El valor de enciende es verdadero?


//en este ejercicio se reciben como parámetros: true o false. 