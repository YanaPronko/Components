/// <reference types="cypress" />
describe('testing Main page', () => {
  it('should visit', () => {
    cy.visit('/main');
  });
  it('should have header with location', () => {
    cy.visit('/main');
    cy.get('h2').should('have.text', 'MAIN page');
  });
  it('should have characters list', () => {
    cy.visit('/main');
    cy.get('li').should('have.length.above', 1);
  });
});
