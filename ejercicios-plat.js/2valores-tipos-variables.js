// Crea un texto, un número que pueda cambiar y un booleano.

const nombre = "Angie";
let nivel = 9; 
let disponible = true;

nivel = 6;
console.log(nombre);
console.log(nivel);
console.log(disponible); 

//tambn pude haber hecho: console.log(nombre, nivel, disponible);

//2. Representa el estado de un reproductor: 
// canción, volumen y si está pausado. Decide cuál puede cambiar.

const cancion = "La niña del volcan"; 
let volumen = 28;
let pausado = true;

volumen = 32;

console.log(cancion, ",", volumen, ",", pausado);
//console.log(cancion + ", " + volumen + ", " + pausado);
//el más recomendado:   ---->   console.log(`${cancion}, ${volumen}, ${pausado}`); 
//con salto de línea:    console.log(`${cancion}, ${volumen}, ${pausado}`);

//con salto de linea y tL:  console.log(`${cancion}\n${volumen}\n${pausado}`); 
//o como un array:  console.log([cancion, volumen, pausado]); 
