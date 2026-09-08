//EJERCICIO API
/**Quiero que escribas un componente Lit completo que:

Al conectarse al DOM, haga fetch a esta URL: 
https://jsonplaceholder.typicode.com/users (una API pública de prueba)
Maneje los 3 estados: cargando, error, datos
Muestre la lista de usuarios (cada uno tiene name y email)
Cada usuario tenga un botón "Ver más" que dispare un evento usuario-clickeado 
enviando el id del usuario */

//importo cosas de lit: 

//EJERCICIO API

//importo cosas de lit: 
import { LitElement, html, css } from 'lit';

class ListaUsuarios extends LitElement { 
  // extiendo (heredo) de LitElement, no lo instancio.
  // Instanciar sería hacer "new ListaUsuarios()" en otro lado.
  // Extender = heredar reactividad, Shadow DOM y lifecycle de LitElement.

  static properties = {
    datos: { type: Array },
    cargando: { type: Boolean },
    error: { type: String },
  };

  constructor() {
    super();
    this.datos = [];       // arranca vacío porque aún no llega nada de la API
    this.cargando = true;  // arranca en true porque apenas se crea, va a empezar a cargar
    this.error = null;     // arranca en null porque "null" representa "no hay error todavía"
                            // (podría ser '' vacío también, pero null comunica mejor "ausencia de algo")
  }

  connectedCallback() {
    super.connectedCallback(); // sí, es para que LitElement haga su propia inicialización interna primero
    this.cargarDatos();        // 👈 CON paréntesis, así se EJECUTA el método
  }

  async cargarDatos() {
    this.cargando = true;
    this.error = null; // limpio cualquier error previo antes de un nuevo intento

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      // response.ok es un booleano: true si el status es 200-299, false si es 400/500 etc.
      if (!response.ok) {
        // "throw" lanza un error manualmente, forzando que caiga en el catch de abajo
        throw new Error(`Error: ${response.status}`);
        // Nota: uso comillas invertidas (backticks) aquí, no comillas simples,
        // porque necesito insertar la variable ${response.status}
      }

      const datos = await response.json(); // convierto la respuesta cruda a un array/objeto de JS usable
      this.datos = datos; // guardo ese resultado en mi property "datos", Lit detecta el cambio y re-renderiza

    } catch (error) {
      // "error" aquí es solo el nombre del parámetro, podría llamarse como sea
      this.error = error.message; 
      // .message es una propiedad que TODOS los objetos Error de JS tienen automáticamente,
      // contiene el texto descriptivo del error

    } finally {
      // esto se ejecuta SIEMPRE, sin importar si hubo error o no
      this.cargando = false; 
      // uso "=" (asignación) no "===" (comparación).
      // "===" se usa dentro de un "if" para PREGUNTAR algo.
      // "=" se usa para ASIGNAR un valor. Aquí estoy asignando, no preguntando.
    }
  }

  render() {
    if (this.cargando) {
      return html`<p>Cargando...</p>`;
    }

    if (this.error) {
      return html`<p>Ocurrió un error: ${this.error}</p>`;
    }

    return html`
      <ul>
        ${this.datos.map(usuario => html`
          <li>
            ${usuario.name} - ${usuario.email}
            <button @click=${() => this._notificarClick(usuario.id)}>
              Ver más
            </button>
          </li>
        `)}
      </ul>
    `;
  }

  _notificarClick(id) {
    this.dispatchEvent(new CustomEvent('usuario-clickeado', {
      detail: { id },       // esto es lo mismo que escribir { id: id }
      bubbles: true,        // para que el evento suba por el árbol del DOM
      composed: true,       // para que atraviese la frontera del Shadow DOM
    }));
  }
}

customElements.define('lista-usuarios', ListaUsuarios);