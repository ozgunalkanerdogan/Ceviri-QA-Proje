describe('Ceviri + Project', () => {
    beforeEach(() => {
        cy.visitProject()
    })
    afterEach(() => {
        cy.reload()
    })

    it('FV01 Bos Input Ceviri Test', () => {
        cy.defaultPage()
        cy.get('.btn-translate').click()
        cy.get('.error-text').should('be.visible')
    })

    it('FV02 Boundary Test ', () => {
        cy.boundaryTest()
    })

    it('FV03 Özel Karakter Test', () => {
        cy.specialCharTest()
    })

    it('FV04 Bos Ceviri Test', () => {
        cy.boslukTest()
    })
})


