/// <reference types="cypress" />

context('Marvel - Login', () => {
  describe('When I visit the login page', () => {
    it('Will log me in with valid credentials', () => {
      cy.intercept({ method: 'POST', url: '/login' }).as('login')

      cy.log('You will need to run php artisan db:seed for this to pass.')
      cy.visit('/login')
      cy.get('[data-cy=email-input]').type('alex@jump24.co.uk')
      cy.get('[data-cy=password-input]').type('testing')
      cy.get('[data-cy=login-button').click()
      cy.wait('@login')
      cy.location('pathname').should('eq', '/')
    })

    it('Will not log me in with valid credentials', () => {
      cy.intercept({ method: 'POST', url: '/login' }).as('login')

      cy.visit('/login')
      cy.get('[data-cy=email-input]').type('alex@jump24.co.uk')
      cy.get('[data-cy=password-input]').type('invalid-password')
      cy.get('[data-cy=login-button').click()
      cy.wait('@login')
      cy.get('[data-cy=validation-errors').contains(
        'These credentials do not match our records.',
      )
    })

    it('Will display fields as required', () => {
      cy.intercept({ method: 'POST', url: '/login' }).as('login')

      cy.visit('/login')
      cy.get('[data-cy=login-button').click()
      cy.wait('@login')
      cy.get('[data-cy=validation-errors').contains(
        'The email field is required.',
      )
      cy.get('[data-cy=validation-errors').contains(
        'The password field is required.',
      )
      cy.get('[data-cy=email-field').contains('The email field is required.')
      cy.get('[data-cy=password-field').contains(
        'The password field is required.',
      )
    })

    it('Will navigate to forgot password page when link is clicked', () => {
      cy.intercept({ method: 'GET', url: '/forgot-password' }).as(
        'forgotPassword',
      )
      cy.visit('/login')
      cy.get('[data-cy=forgot-password-link').click()
      cy.wait('@forgotPassword')
      cy.location('pathname').should('eq', '/forgot-password')
    })
  })
})
