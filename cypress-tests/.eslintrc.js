// DO NOT ADD ANY OTHER RULES TO THIS FILE WITHOUT
// CONSULTING WITH THE WHEEL TEAM.
module.exports = {
  extends: ["../.eslintrc"],
  rules: {
    // disable async/await for cypress given that cypress doesn't allow async/await syntax
    // https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-use-the-new-ES7-async-await-syntax
    "promise/prefer-await-to-then": "off"
  }
};
