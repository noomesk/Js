//bucles anidados: un bucle dentro de otro jajaj tipo mandelbrot pero más sencillo:
/* La Analogía del Reloj
Piensa en las agujas de un reloj:

La aguja de las horas se mueve muy lento (bucle externo).
La aguja de los minutos da una vuelta completa de 60 pasos (bucle interno) por cada única hora que avanza la de las horas. */
// EJERCICIO:  El Generador de Cuadrados (3x3):
/* Si quiero imprimir en consola: 
# # #
# # #
# # #
Para dibujar esto en pantalla, no podemos pintar hacia abajo y luego hacia el lado fácilmente; los ordenadores escriben de izquierda a derecha (una fila entera) y luego saltan a la siguiente fila (hacia abajo).

Así que pensamos:

Necesito dibujar 3 filas (Bucle Externo).
En cada fila, necesito colocar 3 columnas de "# " (Bucle Interno).
Al terminar cada fila, necesito añadir un salto de línea (\n) para que la siguiente fila empiece abajo. */
let resultado = ""; // Aquí acumulamos todo el dibujo

// Bucle Externo: Controla las FILAS (i va de 0 a 2, total 3 filas)
for (let fila = 0; fila < 3; fila++) {
    
    // Bucle Interno: Controla las COLUMNAS dentro de la fila actual
    for (let columna = 0; columna < 3; columna++) {
        resultado += "# "; // Añade un símbolo a la fila actual
    }
    
    // Al salir del bucle interno (terminamos la fila), agregamos un salto de línea
    resultado += "\n"; 
}

console.log(resultado);