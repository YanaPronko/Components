/// <reference types="cypress" />
describe('testing Home page', () => {
  it('should visit', () => {
    cy.visit('/');
  });
  it('should have header', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'About us');
  });
});
