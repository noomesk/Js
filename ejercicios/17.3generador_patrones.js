let resultado = ""; // Aquí se crea una variable llamada resultado, esta vacia xq voa construir el dibujo poco a poco jej

// Bucle Externo: Controla las FILAS (i va de 0 a 2, total 3 filas)
for (let fila = 0; fila < 3; fila++) { // es el encargado de decir:¿Cuántas líneas tendrá mi dibujo?
    // Inicialización: Creé una variable llamada fila que empieza en 0.
    // ¿Por qué 0 y no 1? xq amigos, en programación normalmente contamos desde cero
    //fila++ significa: fila = fila + 1 
    //fila < 3: mientras fila sea menor que 3, sigue.

    // este for dibuja espacios:
    let espacios = 2 - fila;

    for (let columna = 0; columna < espacios; columna++) {
        resultado += " ";
    
    }
    let cantidad = fila * 2 + 1;  // Esta es la matemática del patrón, para saber cuantas estrellas tiene cada fila
 // 0 * 2 + 1 = 1 \ en fila 1: 1 * 2 + 1 =3,\ en fila2: 2 * 2 + 1 = 5
    // Bucle Interno: Controla las COLUMNAS dentro de la fila actual
    for (let columna = 0; columna < cantidad; columna++){ //bucle interno
        // este buble controla: ¿Cuántas estrellas pongo en esta fila? 
        //La fila externa dice: Estoy haciendo la fila número 1, La interna dice: Ok, ¿cuántas estrellas van aquí?
        resultado += "*"; // Añade una estrella a la fila actual
    }

        // Al salir del bucle interno (terminamos la fila), agregamos un salto de línea \n
        resultado += "\n";  // esto debe ir antes de cerrar el primer for
            
        }  
    


console.log(resultado); // Imprime todo lo que se hizo jej

/*
Cuando haga patrones, debo pensar en:

Bucle externo = filas.

Primer bucle interno = cosas antes (espacios).

Segundo bucle interno = cosas que dibuje (Z.B. estrellas)*/ 