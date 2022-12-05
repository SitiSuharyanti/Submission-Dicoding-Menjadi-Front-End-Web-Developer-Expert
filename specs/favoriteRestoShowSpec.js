import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-resto/favorite-resto-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no resto have been liked', () => {
    it('should ask for the favorite resto', () => {
      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no resto have been liked', (done) => {
      document.getElementById('restaurant').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.card-resto-not-found').length).toEqual(1);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteResto.getAllResto.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });

  describe('When favorite resto exist', () => {
    it('should show the resto', (done) => {
      document.getElementById('restaurant').addEventListener('resto:updated', () => {
        expect(document.querySelectorAll('.card').length).toEqual(2);
        done();
      });

      const favoriteResto = spyOnAllFunctions(FavoriteRestoIdb, false);
      favoriteResto.getAllResto.and.returnValues([
        {
          id: 11,
          name: 'A',
          description: 'Sebuah resto A',
          city: 'Kota resto A',
          rating: 4.2,
        },
        {
          id: 22,
          name: 'B',
          description: 'Sebuah resto B',
          city: 'Kota resto B',
          rating: 4,
        },
      ]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
