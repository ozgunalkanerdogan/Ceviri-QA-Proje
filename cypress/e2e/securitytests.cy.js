describe('Ceviri + Project', () => {
    beforeEach(() => {
        cy.visitProject()
    })

    it('S-01 XSS Testi', () => {
        cy.on('uncaught:exception', (err) => {
            throw new Error(`Hata bulundu: ${err.message}`)
            })
            cy.xssCheck()
    })
})