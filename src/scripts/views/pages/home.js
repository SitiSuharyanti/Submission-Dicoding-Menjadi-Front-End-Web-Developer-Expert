import RestaurantsSource from '../../data/restaurants-source';
import { createRestoItemTemplate, createSkeletonRestoTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <section class="center-content">
        <h4 tabindex="0">Temukan rekomendasi resto terdekat dan favorite banyak orang disekitarmu</h4>
        <p tabindex="0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste hic ducimus.</p>
      </section>
      <section id="explore">
        <h2 tabindex="0">EXPLORE RESTAURANT</h2>
        <article class="restaurant">
          ${createSkeletonRestoTemplate(20)}
        </article>
      </section>
    `;
  },

  async afterRender() {
    const resto = await RestaurantsSource.home();
    const restoContainer = document.querySelector('.restaurant');
    restoContainer.innerHTML = '';
    resto.forEach((restaurants) => {
      restoContainer.innerHTML += createRestoItemTemplate(restaurants);
    });
  },
};

export default Home;
