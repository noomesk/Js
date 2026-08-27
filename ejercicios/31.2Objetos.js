//Modela un evento con nombre, fecha y cupos. 


const evento = {
  nombre: "Hackaton",
  fecha: "2026-06-28",
  cupos: 3,
};

function etiqueta(item) {
  return item.nombre + " — " + item.precio; //item es el objeto q me pasen  ZB: etiqueta(producto) ES item = producto;; 
}

console.log(etiqueta(producto));