/// <reference types="cypress" />

context('Marvel - Show Character', () => {
  describe('When I visit show character url', () => {
    it('Will display Captain Americas profile page.', () => {
      cy.visit('/characters/1009220')
      cy.get('[data-cy=title]').contains('Captain America')
      cy.get('[data-cy=description]').contains(
        'Vowing to serve his country any way he could, young Steve Rogers took ' +
          "the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over " +
          '60 years, Captain America is the living, breathing symbol of freedom and liberty.',
      )
      cy.get('[data-cy=marvel-link]').contains('View Marvel Profile')
      cy.get('[data-cy=comic-card]').should('have.length', 21)
    })
  })
})
