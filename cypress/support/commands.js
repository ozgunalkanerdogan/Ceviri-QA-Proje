
Cypress.Commands.add('visitProject', () => {
  cy.visit('https://meryemozkan1.github.io/Translate-App-Toolkit/')
})

Cypress.Commands.add('defaultPage', () => {
  cy.get(':nth-child(1) > .css-13cymwt-control').should('contain.text', 'Turkish')
  cy.get(':nth-child(3) > .css-13cymwt-control').should('contain.text', 'English')
  cy.get(':nth-child(1) > textarea').should('be.empty')
  cy.get(':nth-child(2) > textarea').should('be.empty')
})

Cypress.Commands.add('testingResult', () => {
  cy.get(':nth-child(1) > textarea').type('Test Ediyorum')
  cy.get('.btn-translate').click()
  cy.get(':nth-child(2) > textarea').should('not.be.empty')
})

Cypress.Commands.add('testingCheck', () => {
  cy.get(':nth-child(1) > textarea').type('Test Ediyorum')
  cy.get('.btn-translate').click()
  cy.get(':nth-child(2) > textarea').should('contain.text', "Testing").should('not.be.empty')
})

Cypress.Commands.add('cevirButtonCheck', () => {
  cy.get(':nth-child(1) > textarea').type('Test Ediyorum')
  cy.get('.btn-translate').click()
  cy.get(':nth-child(2) > textarea').should('not.be.empty')
})

Cypress.Commands.add('degisButtonCheck', () => {
  cy.get(':nth-child(1) > .css-13cymwt-control').should('contain.text', 'Turkish')
  cy.get(':nth-child(3) > .css-13cymwt-control').should('contain.text', 'English')
  cy.get('.bg-teal-500').click()
  cy.get(':nth-child(1) > .css-13cymwt-control').should('contain.text', 'English')
  cy.get(':nth-child(3) > .css-13cymwt-control').should('contain.text', 'Turkish')
})

Cypress.Commands.add('boundaryTest', () => {
  const longText = 'a'.repeat(501)
  cy.defaultPage()
  cy.get(':nth-child(1) > textarea').type(longText)
  cy.get('.btn-translate').click()
  cy.get('body').should('be.visible')
})

Cypress.Commands.add('specialCharTest', () => {
  const specialChars = '!@#$%^&*()_+{}:"<>?[];\',./`~'
  cy.defaultPage()
  cy.get(':nth-child(1) > textarea').type(specialChars)
  cy.get('.btn-translate').click()
  cy.get(':nth-child(2) > textarea').should('not.be.empty')
  cy.get('body').should('not.contain.text', 'Error')
  cy.get('body').should('not.contain.text', 'undefined')
  cy.get(':nth-child(1) > textarea').should('exist')
  cy.get('.btn-translate').should('exist')
})

Cypress.Commands.add('boslukTest', () => {
  cy.get(':nth-child(1) > textarea').type('      ')
  cy.get('.btn-translate').click()
  cy.get(':nth-child(2) > textarea').should('be.empty')
})  

Cypress.Commands.add('xssCheck', () => {
  cy.get(':nth-child(1) > textarea').type('<script>alert("XSS")</script>')
  cy.get('.btn-translate').click()
})