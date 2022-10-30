describe('empty spec', () => {
  it.only('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1')
      .should('be.visible')
  })
})