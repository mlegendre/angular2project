import { MyPersonalProjectsPage } from './app.po';

describe('my-personal-projects App', function() {
  let page: MyPersonalProjectsPage;

  beforeEach(() => {
    page = new MyPersonalProjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
