// El condicional nota >= 90 estaba en C y el C en A (ej ejercicio
//enseña q js lee de arriba hacia abajo y toca cambiar la condición
//de orden para que funcione correctamente.)

const nota = 85;
let letra = "";

if (nota >= 90) {
  letra = "A";
} else if (nota >= 80) {
  letra = "B";
} else if (nota >= 70) {
  letra = "C";
} else {
  letra = "F";
}

console.log(letra);