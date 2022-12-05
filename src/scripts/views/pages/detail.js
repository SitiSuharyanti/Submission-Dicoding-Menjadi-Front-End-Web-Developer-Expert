import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
      <article class="detail-restaurant"></article>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantsSource.detailResto(url.id);
    const restoContainer = document.querySelector('.detail-restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        rating: resto.rating,
        city: resto.city,
        description: resto.description,
      },
    });
  },
};

export default Detail;
