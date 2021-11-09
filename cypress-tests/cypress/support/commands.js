// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { commonSelectors } from "Selectors/common";

Cypress.Commands.add(
  "inSensContains",
  { prevSubject: "element" },
  (subject, text) => {
    if (subject) {
      cy.get(subject).contains(text, { matchCase: false });
    }
  }
);

Cypress.Commands.add("clearAndType", (selector, text) => {
  cy.get(selector).clear().type(text);
});

Cypress.Commands.add("verifyToastMessage", message => {
  cy.get(commonSelectors.toastMessage)
    .should("be.visible")
    .should("have.inSensTrimmedText", message);

  // close toast message
  cy.get(commonSelectors.toastCloseButton).click();
  cy.get(commonSelectors.toastMessage).should("not.be.visible");
});
