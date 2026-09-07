//SD como frontera:
class PrivateBanner extends HTMLElement {
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML =
      '<style>.box{border:2px solid #ffe600;padding:12px}</style><div class="box">Actualización disponible</div>';
  }
}
customElements.define('private-banner', PrivateBanner);