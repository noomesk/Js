/**Recorre todo el array, acumula todos sus valores
 * desde cero y devuelve el total. Un array vacio debe devolver 0.
 */
function suma (numeros){
  let total = 0;

 for (let i = 0; i < numeros.length; i++){
  total+=numeros[i];
 
 }
   return total;
}