/* Ejercicio 5: Clasificación de temperatura
Escribe una función llamada: clasificarTemperatura(temp)

Debe retornar:

Temperatura	Retorna
temp >= 35	"Mucho calor"
temp >= 25	"Calor"
temp >= 15	"Templado"
temp >= 5	"Frío"
menor que 5	"Mucho frío"
*/
function clasificarTemperatura(temp) {
    if (temp >= 35) {
        return "Mucho calor";
    } else if (temp >= 25) {
        return "Calor"; 
    } else if (temp >= 15) {
        return "Templado";
    } else if (temp >= 5) {
        return "Frío";
    } else {
        return "Mucho frío";
    }
} 

console.log(clasificarTemperatura(38));
console.log(clasificarTemperatura(28));
console.log(clasificarTemperatura(18));
console.log(clasificarTemperatura(8));
console.log(clasificarTemperatura(-2));

//Cuando las condiciones se solapan (se traslapan), 
// debes preguntar de la más específica a la más general.