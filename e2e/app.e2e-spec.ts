import { JinshiPage } from './app.po';

describe('jinshi App', () => {
  let page: JinshiPage;

  beforeEach(() => {
    page = new JinshiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
