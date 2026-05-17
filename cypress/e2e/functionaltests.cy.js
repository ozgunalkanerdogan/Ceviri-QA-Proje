describe('Ceviri + Project', () => {
  beforeEach(() => {
    cy.visitProject()
  })
  afterEach(() => {
    cy.reload()
  })

  it('F01 Giris Ekrani Yuklenme Suresi', () => {
    cy.window().then((win) => {
      const navEntry = win.performance.getEntriesByType('navigation')[0]
      const loadTime = navEntry.loadEventEnd - navEntry.startTime
      expect(loadTime).to.be.lessThan(3000)
    })
  })

  it('F02 CRUD İslemleri Kontrol', () => {
    cy.cevirButtonCheck()
    cy.degisButtonCheck()
  })

  it('F03 Sayfa Yenileme Kontrol', () => {
    cy.testingResult()
    cy.reload()
    cy.defaultPage()
  })
  it('F04 Çeviri Kontrol', () => {
    cy.defaultPage()
    cy.testingCheck()
  })
  it('F05 Dil Degistirme Kontrol', () => {
    cy.defaultPage()
    cy.degisButtonCheck()
  })
  it("F06 Dropdown Kontrol", () => {
    cy.get('.css-13cymwt-control').eq(0).click();
    cy.get('#react-select-2-input').type('{downarrow}');

    Cypress._.times(15, () => {
      cy.focused().type('{downarrow}');
      cy.wait(100);
    });
    cy.focused().type('{enter}');
    cy.get('.css-1dimb5e-singleValue').should('exist');

  });

})
