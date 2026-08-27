//Js busca el id equivocado: 

const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje"); // antes estaba: const mensaje = document.getElementById("titulo"); x eso no funcionaba 

titulo.textContent = "Página lista"; //el titulo cambia
mensaje.textContent = "DOM conectado"; //el mensaje cambia  