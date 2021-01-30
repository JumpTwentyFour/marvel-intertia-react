/// <reference types="cypress" />

context('Marvel - Forgot Password', () => {
  describe('When I visit the forgot password page', () => {
    it('It will send a reset link if I have a valid email address', () => {
      cy.intercept({ method: 'POST', url: '/forgot-password' }).as(
        'resetPassword',
      )

      cy.visit('/forgot-password')
      cy.get('[data-cy=email-input]').type('alex@jump24.co.uk')
      cy.get('[data-cy=email-reset-button').click()
      cy.wait('@resetPassword')
      cy.get('[data-cy=status]').contains(
        'We have emailed your password reset link!',
      )
      cy.get('[data-cy=email-input]').should('have.value', '')
    })

    it('Will not display navigation', () => {
      cy.visit('/forgot-password')
      cy.get('[data-cy=navigation').should('not.exist')
    })
  })
})
