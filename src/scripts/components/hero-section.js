class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero">
      <div class="isi-hero">
        <h1 tabindex="0">Golek Resto</h1>
        <p tabindex="0">Jangan khawatir kelaparan jika berpergian, Golek resto siapa membantu mencari restoran terdekat.</p>
        <button><a href="#explore">Cari Resto</a></button>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
