describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.beginButton').click();
    cy.get('input').clear('J');
    cy.get('input').type('Javascript');
    cy.get('div > button').click();
    cy.get('#myRange').click();
    /* ==== End Cypress Studio ==== */
  })
})