import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestoSearchView {
  getTemplate() {
    return `
      <section id="explore">
        <h2 tabindex="0">RESTAURANT FAVORITE</h2>
        <input id="query" type="text">
        <article id="restaurant" class="restaurant"></article>
      </section>
    `;
  }

  showFavoriteResto(resto = []) {
    let html;

    if (resto.length) {
      html = resto.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.getElementById('restaurant').innerHTML = html;

    document.getElementById('restaurant').dispatchEvent(new Event('resto:updated'));
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  _getEmptyRestoTemplate() {
    return '<div class="card-resto-not-found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestoSearchView;
