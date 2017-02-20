import { browser, by, element } from 'protractor';

describe('Search', () => {

  beforeEach(() => {
    browser.get('/search');
  });

  it('should have an input and search button', () => {
    expect(element(by.css('app-root app-search input')).isPresent()).toEqual(true);
    expect(element(by.css('app-root app-search button')).isPresent()).toEqual(true);
  });

  it('should allow searching', () => {
    let searchButton = element(by.css('button'));
    let searchBox = element(by.css('input'));
    searchBox.sendKeys('M');
    searchButton.click().then(() => {
      let list = element.all(by.css('app-search md-list md-list-item'));
      expect(list.count()).toBe(3);
    });
  });
});
