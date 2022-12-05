class SkipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="" class="skip-link">Masuk ke konten utama</a>
    `;
  }
}

customElements.define('skip-content', SkipContent);
