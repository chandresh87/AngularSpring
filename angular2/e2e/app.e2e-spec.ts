import { ItmpBrowserPage } from './app.po';

describe('itmp-browser App', function() {
  let page: ItmpBrowserPage;

  beforeEach(() => {
    page = new ItmpBrowserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
