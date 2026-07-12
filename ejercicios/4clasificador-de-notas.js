/* Escribe una función llamada:

clasificarNota(nota)

Debe retornar:

CondiciónRetorna
nota >= 90"Excelente"
nota >= 80"Muy bien"
nota >= 70"Bien"
nota >= 60"Aprobado"
menor que 60"Reprobado"
*/

function clasificarNota(nota) {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 80) {
        return "Muy bien";
    } else if (nota >= 70) {
        return "Bien";
    } else if (nota >= 60) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

console.log(clasificarNota(95));
console.log(clasificarNota(84));
console.log(clasificarNota(73));
console.log(clasificarNota(60));
console.log(clasificarNota(45));
