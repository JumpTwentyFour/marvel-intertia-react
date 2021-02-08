/// <reference types="cypress" />

context('Marvel - List Comics', () => {
  describe('When I visit comics list page', () => {
    it('Will display 100 marvel comics.', () => {
      cy.visit('/comics')
      cy.get('[data-cy=title]').contains('All Comics')
      cy.get('[data-cy=comic-card]').should('have.length', 100)
    })

    it('Will retrieve comics based on my search', () => {
      cy.intercept({ method: 'GET', url: '/comics?title=Guardians' }).as(
        'searchGuardians',
      )

      cy.visit('/comics')
      cy.get('[data-cy=search-icon]').click()
      cy.get('[data-cy=search-input]').type('Guardians{enter}')

      cy.wait('@searchGuardians')

      cy.get('[data-cy=title]').contains('Guardians')
      cy.get('[data-cy=comic-card]').should('have.length', 5)
      cy.get('[data-cy=comic-card]:eq(0)').should(
        'contain',
        'Guardians (2004) #5',
      )
      cy.get('[data-cy=comic-card]:eq(1)').should(
        'contain',
        'Guardians (2004) #4',
      )
      cy.get('[data-cy=comic-card]:eq(2)').should(
        'contain',
        'Guardians (2004) #3',
      )
      cy.get('[data-cy=comic-card]:eq(3)').should(
        'contain',
        'Guardians (2004) #2',
      )
      cy.get('[data-cy=comic-card]:eq(4)').should(
        'contain',
        'Guardians (2004) #1',
      )
    })
  })

  it('Will display no comics found when no comics are found for search', () => {
    cy.intercept({
      method: 'GET',
      url: '/comics?name=batman',
    }).as('search')

    cy.visit('/comics')
    cy.get('[data-cy=search-icon]').click()
    cy.get('[data-cy=search-input]').type('batman{enter}')

    cy.wait('@search')

    cy.contains('No Comics Found')
  })
})
