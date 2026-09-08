//ciclos de vida lit:
static properties = {
  name: { type: String }
};

connectedCallback() {
  super.connectedCallback();
  console.log('Entré al DOM');
}

updated(changedProperties) {
  if (changedProperties.has('name')) {
    console.log('name cambió de', changedProperties.get('name'), 'a', this.name);
  }
}

disconnectedCallback() {
  super.disconnectedCallback();
  console.log('Salí del DOM, limpio listeners');
}