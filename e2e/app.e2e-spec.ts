import { PrimefacesPage } from './app.po';

describe('primefaces App', function() {
  let page: PrimefacesPage;

  beforeEach(() => {
    page = new PrimefacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
