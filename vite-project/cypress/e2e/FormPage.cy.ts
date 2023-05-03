/// <reference types="cypress" />
describe('testing Form page', () => {
  it('should visit', () => {
    cy.visit('/form');
  });
  it('should have header with location', () => {
    cy.visit('/form');
    cy.get('h2').should('have.text', 'FORM page');
  });
  it('should have 8 inputs', () => {
    cy.visit('/form');
    cy.get('input').should('have.length', 8);
  });
});
