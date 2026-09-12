// Usa bucles para ser eficiente
// Ejemplo: robot.repeat(3, () => robot.moveRight())
// O usa for: for (let i = 0; i < 3; i++) { robot.moveRight(); }

// Tu codigo aqui:

//robot.repeat(3, () => robot.moveRight())
//robot.repeat(4, () => robot.moveDown())
//robot.repeat(3, () => robot.moveRight())

for (let i = 0; i < 5; i++) { robot.moveRight(); }
robot.moveDown(); // for (let i = 0; i < 1; i++) { robot.moveDown(); } este bucle es innesesario si solo se mueve 1 paso
for (let i = 0; i < 2; i++) { robot.moveLeft(); }
for (let i = 0; i < 3; i++) { robot.moveDown(); }
for (let i = 0; i < 3; i++) { robot.moveRight(); }

/**
 * robot.repeat es mucho mas legible, asi quedaria:
 * robot.repeat(5, () => robot.moveRight());
 * robot.repeat(1, () => robot.moveDown());
 * robot.repeat(2, () => robot.moveLeft());
 * robot.repeat(3, () => robot.moveDown());
 * robot.repeat(3, () => robot.moveRight());
 */


/**o con una función:
 * function mover(veces, movimiento) {
    for (let i = 0; i < veces; i++) {
        movimiento();
    }
}

mover(5, () => robot.moveRight());
mover(1, () => robot.moveDown());
mover(2, () => robot.moveLeft());
mover(3, () => robot.moveDown());
mover(3, () => robot.moveRight());
Así evitaría escribir el mismo for una y otra vez.*/ 


/**Opción más avanzada: UN ARREGLO Y RECORRERLO
 * const movimientos = [
    [5, () => robot.moveRight()],
    [1, () => robot.moveDown()],
    [2, () => robot.moveLeft()],
    [3, () => robot.moveDown()],
    [3, () => robot.moveRight()]
];

for (const [veces, movimiento] of movimientos) {
    for (let i = 0; i < veces; i++) {
        movimiento();
    }
}

Esto hace que sea muy fácil modificar el recorrido: 
solo seria cambiar los números o las direcciones en el arreglo.
 */