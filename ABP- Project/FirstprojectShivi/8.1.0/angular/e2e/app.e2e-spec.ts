import { FirstprojectShiviTemplatePage } from './app.po';

describe('FirstprojectShivi App', function() {
  let page: FirstprojectShiviTemplatePage;

  beforeEach(() => {
    page = new FirstprojectShiviTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
