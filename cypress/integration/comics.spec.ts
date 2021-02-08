/// <reference types="cypress" />
/// <reference path="../support/index.d.ts" />

context('Marvel - Comics', () => {
  describe('When I visit the comics page', () => {
    it('Will display comics', () => {
      cy.login({ email: 'cypress@jump24.co.uk' })
      cy.visit('/comics')
    })
    it('Will filter items when I click the alphabet filter', () => {
      const character = String.fromCharCode(65 + Math.floor(Math.random() * 26))
      const dataSelector = '[data-cy=character-filter-button-' + character + ']'
      cy.get(dataSelector).click()
      cy.location().should(location => {
        expect(location.search).to.eq('?titleStartsWith=' + character)
      })
      cy.get('[data-cy=comic-card-title]').each(title => {
        const regEx = new RegExp('^' + character)
        expect(title.text()).to.match(regEx)
      })
    })
  })
})
