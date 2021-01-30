/// <reference types="cypress" />

context('Marvel - Register', () => {
  describe('When I visit the register page', () => {
    it('Will register me with valid credentials', () => {
      cy.intercept({ method: 'POST', url: '/register' }).as('register')

      cy.visit('/register')
      cy.get('[data-cy=name-input]').type('Cypress Tester')
      cy.get('[data-cy=email-input]').type('cypress-tester@jump24.co.uk')
      cy.get('[data-cy=password-input]').type('testing123')
      cy.get('[data-cy=confirm-password-input]').type('testing123')
      cy.get('[data-cy=register-button').click()
      cy.wait('@register')
      cy.location('pathname').should('eq', '/')
    })

    it('Will prevent me registering with an existing email', () => {
      cy.intercept({ method: 'POST', url: '/register' }).as('register')

      cy.visit('/register')
      cy.get('[data-cy=name-input]').type('Cypress Tester')
      cy.get('[data-cy=email-input]').type('alex@jump24.co.uk')
      cy.get('[data-cy=password-input]').type('testing123')
      cy.get('[data-cy=confirm-password-input]').type('testing123')
      cy.get('[data-cy=register-button').click()
      cy.wait('@register')
      cy.get('[data-cy=validation-errors').contains(
        'The email has already been taken.',
      )
    })

    it('Will prevent me registering without filling in all fields', () => {
      cy.intercept({ method: 'POST', url: '/register' }).as('register')

      cy.visit('/register')
      cy.get('[data-cy=register-button').click()
      cy.wait('@register')
      cy.get('[data-cy=validation-errors').contains(
        'The name field is required.',
      )
      cy.get('[data-cy=validation-errors').contains(
        'The email field is required.',
      )
      cy.get('[data-cy=validation-errors').contains(
        'The password field is required.',
      )
    })

    it('Will prevent me registering when passwords do not match', () => {
      cy.intercept({ method: 'POST', url: '/register' }).as('register')

      cy.visit('/register')
      cy.get('[data-cy=name-input]').type('Cypress Tester')
      cy.get('[data-cy=email-input]').type('invalid-password@jump24.co.uk')
      cy.get('[data-cy=password-input]').type('testing123')
      cy.get('[data-cy=confirm-password-input]').type('testing1234')
      cy.get('[data-cy=register-button').click()
      cy.wait('@register')
      cy.get('[data-cy=validation-errors').contains(
        'The password confirmation does not match.',
      )
    })

    it('Will navigate to the login page when already registered? is clicked', () => {
      cy.intercept({ method: 'GET', url: '/login' }).as('login')
      cy.visit('/register')
      cy.get('[data-cy=login-link').click()
      cy.wait('@login')
      cy.location('pathname').should('eq', '/login')
    })

    it('Will not display navigation', () => {
      cy.visit('/register')
      cy.get('[data-cy=navigation').should('not.exist')
    })
  })
})
