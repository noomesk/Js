/* do: Significa "hacer" en inglés.
while: Significa "mientras" en inglés.
Traducido al español se lee como: "Haz [esto primero]... y luego repítelo MIENTRAS
 [esta condición sea verdadera]*/


const respuestasUsuario = ["tal vez", "no lo sé", "sí"];
let indice = 0; // Para ir sacando las respuestas una a una
let respuestaActual;

do {
    // Respuesta actual del array 
    respuestaActual = respuestasUsuario[indice]; 
    indice++;
    console.log("El usuario respondió: " + respuestaActual);
} while (respuestaActual !== "sí" && respuestaActual !== "no"); // &&= y || = o (en caso de o seria un bucle infinito) Mientras responda tonterias sigue preguntando jaja


/* Patrón: Cuando queramos validar que un dato NO sea un valor ni tampoco otro, la condición lógica de repetición siempre requiere el operador Y (&&) 
junto con los comparadores de desigualdad (!==). Usar un O (||) en este escenario crea una
 tautología (una condición que siempre es verdadera) y provoca un bucle infinito. */