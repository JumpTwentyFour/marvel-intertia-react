/// <reference types="cypress" />

context('Marvel - List Characters', () => {
  describe('When I visit characters list page', () => {
    it('Will display 100 marvel characters.', () => {
      cy.visit('/characters')
      cy.get('[data-cy=title]').contains('All Characters')
      cy.get('[data-cy=character-card]').should('have.length', 100)
    })

    it('Will retrieve characters based on my search', () => {
      cy.intercept({ method: 'GET', url: '/characters?name=Hulk' }).as(
        'searchHulk',
      )

      cy.visit('/characters')
      cy.get('[data-cy=search-icon]').click()
      cy.get('[data-cy=search-input]').type('Hulk{enter}')

      cy.wait('@searchHulk')

      cy.get('[data-cy=title]').contains('Hulk')
      cy.get('[data-cy=character-card]').should('have.length', 9)
      cy.get('[data-cy=character-card]:eq(0)').should('contain', 'Hulk')
      cy.get('[data-cy=character-card]:eq(1)').should('contain', 'Hulk (HAS)')
      cy.get('[data-cy=character-card]:eq(2)').should(
        'contain',
        'Hulk (LEGO Marvel Super Heroes)',
      )
      cy.get('[data-cy=character-card]:eq(3)').should(
        'contain',
        'Hulk (Marvel Zombies)',
      )
      cy.get('[data-cy=character-card]:eq(4)').should(
        'contain',
        'Hulk (Marvel: Avengers Alliance)',
      )
      cy.get('[data-cy=character-card]:eq(5)').should(
        'contain',
        'Hulk (Ultimate)',
      )
      cy.get('[data-cy=character-card]:eq(6)').should('contain', 'Hulk-dok')
      cy.get('[data-cy=character-card]:eq(7)').should(
        'contain',
        'Hulk/Bruce Banner (MAA)',
      )
      cy.get('[data-cy=character-card]:eq(8)').should('contain', 'Hulkling')
    })
  })

  it('Will display no characters found when no characters are found for search', () => {
    cy.intercept({ method: 'GET', url: '/characters?name=abc123' }).as('search')

    cy.visit('/characters')
    cy.get('[data-cy=search-icon]').click()
    cy.get('[data-cy=search-input]').type('abc123{enter}')

    cy.wait('@search')

    cy.contains('No Characters Found')
  })

  it('Can navigate to individual character page', () => {
    cy.intercept({ method: 'GET', url: '/characters/' }).as('showCharacter')

    cy.visit('/characters')
    cy.get('[data-cy=character-card]:eq(0)')
      .find('[data-cy=view-character-link]')
      .click()

    cy.wait('@showCharacter')

    cy.location('pathname').should('include', '/characters/')
    cy.get('[data-cy=title]').should('exist')
  })
})
