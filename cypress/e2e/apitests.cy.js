describe('Ceviri + Project', () => {

    it('should display an error message when the API is not reachable', () => {
    cy.intercept('GET', '**/get*', { forceNetworkError: true }).as('networkError')
    cy.get(':nth-child(1) > textarea').type('merhaba')
    cy.get('.btn-translate').click()
    cy.wait('@networkError')
    cy.get('body').should('exist')
    cy.get(':nth-child(2) > textarea').should('not.be.empty')
})
})