/// <reference types="cypress" />
// About API testing: https://docs.cypress.io/api/commands/request#Method-and-URL
describe('Check api request', () => {
  it('Get 200 status', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.jikan.moe/v4/anime?q=&sfw',
    }).as('getEntries');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cy.get('@getEntries').should((response: any) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property('headers');
      expect(response.body).to.have.property('data');
    });
  });
});
