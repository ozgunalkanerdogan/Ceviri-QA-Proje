describe('Vite-React Project', () => {
  beforeEach(() => {
    cy.visitProject()
  })

  it('F01 Giris Ekrani Yuklenme Suresi', () => {
    cy.window().then((win) => {
      const navEntry = win.performance.getEntriesByType('navigation')[0]
      const loadTime = navEntry.loadEventEnd - navEntry.startTime
      expect(loadTime).to.be.lessThan(3000)
    })
  })
})