const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.card-resto-not-found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.card-resto-not-found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name a');

  I.seeElement('.restaurant-name a');

  const firstResto = locate('.restaurant-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedRestoName = await I.grabTextFrom('.restaurant-name');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('searching resto', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.card-resto-not-found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name a');

  I.seeElement('.restaurant-name a');

  const names = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingResto = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.card');
  assert.strictEqual(matchingResto.length, visibleLikedResto);

  matchingResto.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
