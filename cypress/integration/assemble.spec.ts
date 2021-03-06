/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

context('Marvel - Assemble', () => {
  describe('When I visit the assemble page', () => {
    it('Will display the seven avengers', () => {
      cy.login({ email: 'cypress@jump24.co.uk' })

      cy.visit('/assemble')
      cy.get('[data-cy=character-card]').should('have.length', 7)
      cy.get('[data-cy=character-card]:eq(0)').should(
        'contain',
        'Captain America',
      )
      cy.get('[data-cy=character-card]:eq(1)').should('contain', 'Iron Man')
      cy.get('[data-cy=character-card]:eq(2)').should('contain', 'Thor')
      cy.get('[data-cy=character-card]:eq(3)').should('contain', 'Hulk')
      cy.get('[data-cy=character-card]:eq(4)').should('contain', 'Wasp')
      cy.get('[data-cy=character-card]:eq(5)').should('contain', 'Hank Pym')
      cy.get('[data-cy=character-card]:eq(6)').should('contain', 'Black Widow')
    })

    it('Can navigate to individual character page', () => {
      cy.intercept({ method: 'GET', url: '/characters/' }).as('showCharacter')

      cy.visit('/assemble')
      cy.get('[data-cy=character-card]:eq(0)')
        .find('[data-cy=view-character-link]')
        .click()

      cy.wait('@showCharacter')

      cy.location('pathname').should('include', '/characters/')
      cy.get('[data-cy=title]').should('exist')
    })
  })
})
