import { loginPath, notesPath } from "Constants/routes";
import { fake } from "Fixtures/fake";
import { loginSelectors } from "Selectors/login";
import { loginTexts } from "Texts/login";

describe("Login", () => {
  let user;
  const invalidCredential = fake.word;

  before(() => {
    cy.fixture("credentials/oliver.json").then(oliver => {
      user = oliver;
    });

    cy.visit(loginPath);
    cy.get(loginSelectors.forgotPasswordLink).should("exist");
    cy.get(loginSelectors.signUpLink).should("exist");
  });

  it("should verify login functionality", () => {
    // should not be able to login with invalid credentials
    cy.get(loginSelectors.emailTextField).clear();
    cy.get(loginSelectors.passwordTextField).clear();
    cy.get(loginSelectors.submitButton).click();
    cy.get(loginSelectors.emailInputErrorMessage).should(
      "have.inSensTrimmedText",
      loginTexts.required
    );
    cy.get(loginSelectors.passwordInputErrorMessage).should(
      "have.inSensTrimmedText",
      loginTexts.required
    );

    cy.clearAndType(loginSelectors.emailTextField, invalidCredential);
    cy.clearAndType(loginSelectors.passwordTextField, user.password);
    cy.get(loginSelectors.submitButton).click();
    cy.get(loginSelectors.emailInputErrorMessage).should(
      "have.inSensTrimmedText",
      loginTexts.invalidEmailMessage
    );

    // login with valid credentials
    cy.clearAndType(loginSelectors.emailTextField, user.email);
    cy.clearAndType(loginSelectors.passwordTextField, user.password);
    cy.get(loginSelectors.submitButton).click();
    cy.verifyToastMessage(loginTexts.loginMessage);
    cy.url().should("include", notesPath);
  });
});
