import { FormUtilsPage } from './app.po';

describe('form-utils App', () => {
  let page: FormUtilsPage;

  beforeEach(() => {
    page = new FormUtilsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
