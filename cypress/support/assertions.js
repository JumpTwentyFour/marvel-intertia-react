Cypress.Commands.add('assertRedirect', function(path) {
  cy.location('pathname').should('eq', ('/' + path).replace(/^\/\//, '/'))
})
