import { Angular4LoginPage } from './app.po';

describe('angular4-login App', () => {
  let page: Angular4LoginPage;

  beforeEach(() => {
    page = new Angular4LoginPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
