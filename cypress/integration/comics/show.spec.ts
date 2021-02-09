/// <reference types="cypress" />

context('Marvel - Show Comic', () => {
  describe('When I visit show comic url', () => {
    it('Will display Deadpool (2019) #1.', () => {
      cy.visit('/comics/77807')
      cy.get('[data-cy=title]').contains('Deadpool (2019) #1')
    })
  })
})
