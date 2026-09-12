/* for (inicio; condicion; incremento) {
    // código que se repite
} */

    //recorrer un array con for:
const frutas = ["manzana", "pera", "uva", "kiwi"];

for (let i = 0; i < frutas.length; i++) {
    console.log(i + ": " + frutas[i]);
}
// 0: manzana
// 1: pera
// 2: uva
// 3: kiwi

//for...of — Forma moderna para arrays
const frutas = ["manzana", "pera", "uva", "kiwi"];

for (const fruta of frutas) {
    console.log(fruta);
}
// No necesitas el índice, obtienes directamente el valor
