class HeaderNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>GOLEK RESTO</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/siti-suharyanti-1276b616a/">About Us</a></li>
            </ul>
        </nav>
    </div>
    `;
  }
}

customElements.define('header-navigation', HeaderNavigation);
