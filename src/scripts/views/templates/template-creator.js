import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestoDetailTemplate = (resto) => `
  <h2 tabindex="0" class="restaurant-name">${resto.name}</h2>
  <picture>
    <source srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" type="image/webp" media="(max-width: 600px)" />        
    <source srcset="${CONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}" type="image/jpeg" media="(max-width: 600px)" />
    <source srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" type="image/webp" media="(min-width: 601px) and (max-width: 960px)" />    
    <source srcset="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" type="image/jpeg" media="(min-width: 601px) and (max-width: 960px)" />
    <img src="${CONFIG.BASE_IMAGE_URL_LARGE + resto.pictureId}" alt="${resto.name}"/>
  </picture>
  <h4 tabindex="0">Alamat</h4>
  <p tabindex="0">${resto.address}</p>
  <h4 tabindex="0">Kota</h4>
  <p tabindex="0">${resto.city}</p>
  <h4 tabindex="0">Deskripsi</h4>
  <p tabindex="0">${resto.description}</p>
  <div class="menu">
      <div class="menu-makanan" tabindex="0">
        <h4>Menu Makanan</h4>
        <ol>
        ${resto.menus.foods
          .map(
            (food) => `
          <li>${food.name}</li>
        `
          )
          .join('')}
        </ol>
      </div>
      <div class="menu-minuman" tabindex="0">
        <h4>Menu Minuman</h4>
        <ol>
        ${resto.menus.drinks
          .map(
            (drink) => `
          <li>${drink.name}</li>
        `
          )
          .join('')}
        </ol>
      </div>
  </div>
  <h4 tabindex="0">Customer Reviews</h4>
  <div class="container-review">
    ${resto.customerReviews
      .map(
        (reviews) => `
        <div class="card-review" tabindex="0">
          <h4>${reviews.name}</h4>
          <p class="tanggal-review">${reviews.date}</p>
          <p>${reviews.review}</p>
        </div>
    `
      )
      .join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="card" tabindex="0">
    <div class="card-head">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId}" alt="gambar ${resto.name || '-'}"/>
    </div>
    <div class="card-body">
      <div class="rating-location">
        <div class="rating">
          <i class="fa fa-star fa-lg" title="rating"></i>
          <p>${resto.rating || '-'}</p>
        </div>
        <div class="location">
          <i class="fa fa-map-marker fa-lg" title="kota"></i>
          <p>${resto.city || '-'}</p>
        </div>
      </div>
      <h3 class="restaurant-name"><a href="/#/detail/${resto.id}">${resto.name || '-'}</a></h3>
      <p class="isi">${resto.description || '-'}</p>
    </div>
  </div>
`;

const createSkeletonRestoTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="card">
      <div class="card-head">
        <img class="skeleton" alt="" height: 15vw;/>
      </div>
      <div class="card-body">
        <div class="rating-location">
          <div class="rating skeleton">
            <i class="fa fa-star fa-lg" title="rating"></i>
            <p></p>
          </div>
          <div class="location skeleton">
            <i class="fa fa-map-marker fa-lg" title="kota"></i>
            <p></p>
          </div>
        </div>
        <h3 class="skeleton">lorem ipsum</h3>
        <p class="skeleton">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
    `;
  }
  return template;
};

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestoDetailTemplate, createRestoItemTemplate, createSkeletonRestoTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate };
