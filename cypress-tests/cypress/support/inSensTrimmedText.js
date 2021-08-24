chai.Assertion.addMethod("inSensTrimmedText", function (expectedString) {
  const $element = this._obj;

  new chai.Assertion($element).to.be.exist;

  const actual = $element.text().trim().toLowerCase();
  const expected = expectedString.trim().toLowerCase();
  this.assert(
    actual === expected,
    "expected '#{this}' to have text '#{exp}' after trimmed and making case neutral, but the text was #{act}.",
    "expected '#{this}' not to have text '#{exp}' after trimmed and case neutral.",
    expected,
    actual
  );
});
