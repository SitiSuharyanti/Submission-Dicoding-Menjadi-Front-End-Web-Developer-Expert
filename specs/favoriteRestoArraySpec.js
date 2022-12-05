import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },

  searchResto(query) {
    return this.getAllResto().filter((resto) => {
      const loweredCaseRestoName = (resto.name || '-').toLowerCase();
      const jammedRestoName = loweredCaseRestoName.replace(/\s/g, '');
      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
      return jammedRestoName.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => (favoriteResto = []));

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
