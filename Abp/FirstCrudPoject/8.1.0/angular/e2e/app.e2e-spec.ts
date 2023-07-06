import { FirstCrudPojectTemplatePage } from './app.po';

describe('FirstCrudPoject App', function() {
  let page: FirstCrudPojectTemplatePage;

  beforeEach(() => {
    page = new FirstCrudPojectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
