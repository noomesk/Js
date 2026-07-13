/*?? solo reemplaza cuando el valor es:
null
undefined */

/*Ejercicio 13 — Nullish Coalescing

Escribe una función: obtenerColor(colorUsuario)

Debe retornar:
Si colorUsuario es null o undefined:
"Azul"
En cualquier otro caso, retornar el valor recibido. */

function obtenerColor(colorUsuario) {
      const color = colorUsuario ?? "Azul";
      return color;
}

console.log(obtenerColor(null)); // Azul
console.log(obtenerColor(undefined));
// Azul



/*| Valor | valor || "X" | valor ?? "X" |
|-------|----------------|----------------|
| "Hola" | "Hola" | "Hola" |
| "" | "X" ❌ | "" ✅ |
| 0 | "X" ❌ | 0 ✅ |
| false | "X" ❌ | false ✅ |
| null | "X" | "X" |
| undefined | "X" | "X" |

Ese cuadro resume toda la diferencia entre || y ??.*/

// a mimir :3