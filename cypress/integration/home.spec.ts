/// <reference types="cypress" />

context('Marvel - Homepage', () => {
  describe('When I visit the homepage', () => {
    it('Will display 6 random marvel characters.', () => {
      cy.visit('/')
      cy.get('[data-cy=title]').contains('Featured Characters')
      cy.get('[data-cy=character-card]').should('have.length', 6)
    })

    it('Will navigate to the characters page when I click View All Characters', () => {
      cy.intercept({ method: 'GET', url: '/characters' }).as('listCharacters')

      cy.visit('/')
      cy.get('[data-cy=view-all-link]').click()
      cy.waitFor('@listCharacters')
      cy.location('pathname').should('eq', '/characters')
    })
  })
})
