/// <reference types="cypress" />

context('Marvel - Assemble', () => {
  describe('When I visit the assemble page', () => {
    it('Will display the seven avengers', () => {
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
  })
})
