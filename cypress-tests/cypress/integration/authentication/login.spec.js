import { fake } from "Fixtures/fake";
import { loginSelectors } from "Selectors/login";
import { loginTexts } from "Texts/login";
import { loginPath, notesPath } from "Constants/routes";

describe("Login", () => {
  let user;
  const invalidCredential = fake.word;
  const shortPassword = fake.number;

  before(() => {
    cy.fixture("credentials/oliver.json").then(oliver => {
      user = oliver;
    });
  });

  beforeEach(() => {
    cy.visit(loginPath);

    cy.get(loginSelectors.forgotPasswordLink).should("exist");
    cy.get(loginSelectors.signUpLink).should("exist");
  });

  it("should not be able to login with invalid credentials", () => {
    cy.get(loginSelectors.emailTextField).clear();
    cy.get(loginSelectors.passwordTextField).clear();
    cy.get(loginSelectors.submitButton).click();
    cy.get(loginSelectors.inputErrorMessage).should(
      "contain.text",
      loginTexts.required
    );

    cy.clearAndType(loginSelectors.emailTextField, invalidCredential);
    cy.clearAndType(loginSelectors.passwordTextField, user.password);
    cy.get(loginSelectors.submitButton).click();
    cy.get(loginSelectors.inputErrorMessage).should(
      "have.inSensTrimmedText",
      loginTexts.invalidEmailMessage
    );

    cy.clearAndType(loginSelectors.emailTextField, user.email);
    cy.get(loginSelectors.passwordTextField).type(shortPassword);
    cy.get(loginSelectors.submitButton).click();
    cy.verifyToastMessage(loginTexts.incorrectEmailOrPasswordMessage);

    cy.clearAndType(loginSelectors.emailTextField, user.email);
    cy.clearAndType(loginSelectors.passwordTextField, invalidCredential);
    cy.get(loginSelectors.submitButton).click();
    cy.verifyToastMessage(loginTexts.incorrectEmailOrPasswordMessage);
  });

  it("should be able to login with valid credentials", () => {
    cy.loginViaUI(user.email, user.password);
    cy.verifyToastMessage(loginTexts.loginMessage);
    cy.url().should("include", notesPath);
  });
});
