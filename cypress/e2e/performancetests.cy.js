describe('Ceviri + Project', () => {

    it('P-03 Sayfa Birden Fazla Yenileme', () => {
        cy.on('uncaught:exception', (err) => {
            throw new Error(`Hata bulundu: ${err.message}`)
        })

        for (let i = 1; i <= 3; i++) {
            cy.visit('https://meryemozkan1.github.io/Translate-App-Toolkit/')
            cy.get('body').should('be.visible')

        }

    })
    it('P-04 Hizli Art Arda Ceviri', () => {

        cy.on('uncaught:exception', (err) => {
            throw new Error(`Hata bulundu: ${err.message}`)
        })

        cy.visit('https://meryemozkan1.github.io/Translate-App-Toolkit/')

        for (let i = 1; i <= 10; i++) {

            cy.cevirButtonCheck()

        }
        cy.get('body').should('be.visible')

    })

})