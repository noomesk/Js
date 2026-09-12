/* Escribe una función llamada:

clasificarNota(nota)

Debe retornar:

Condición	Retorna
nota >= 90	"Excelente"
nota >= 80	"Muy bien"
nota >= 70	"Bien"
nota >= 60	"Aprobado"
menor que 60	"Reprobado"
*/ 
function clasificarNota(nota) {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 80) {
        return "Muy Bien";
    } else if (nota >= 70) {
        return "Bien";
    } else if (nota >= 60) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}

console.log(clasificarNota(95)) // Excelente
console.log(clasificarNota(84)) // Muy Bien
console.log(clasificarNota(73)) // Bien
console.log(clasificarNota(60)) // Aprobado
console.log(clasificarNota(45)) // Reprobado