/// <reference types="cypress" />
/// <reference path="../../support/index.d.ts" />

context('Marvel - Alphabetical Filter', () => {
  describe('When I visit the comics page', () => {
    it('Will display comics', () => {
      cy.login({ email: 'cypress@jump24.co.uk' })
      cy.visit('/comics')
    })
    it('Will filter items when I click the alphabet filter', () => {
      cy.get('[data-cy=character-filter-button]:eq(0)').click()
      cy.location().should(location => {
        expect(location.search).to.eq('?titleStartsWith=A')
      })
    })
  })
})
