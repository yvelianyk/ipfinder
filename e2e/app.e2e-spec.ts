import { IPFinderPage } from './app.po';

describe('ipfinder App', function() {
  let page: IPFinderPage;

  beforeEach(() => {
    page = new IPFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
