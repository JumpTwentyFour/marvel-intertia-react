// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  type LoginAttributes = {
    name?: string
    email?: string
  }

  interface Chainable {
    /**
     * Create a new user and log them in.
     *
     * @param {Object} attributes
     *
     * @example cy.login();
     *          cy.login({ email: 'alex@jump24.co.uk' });
     *          cy.login({ name: 'Alex Williams' });
     */
    login(attributes: LoginAttributes): Chainable<Element>
  }
}
