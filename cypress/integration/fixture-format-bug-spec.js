describe("Fixtures", function() {
  it("should load fixture", function() {
    cy.fixture("formatted").then(json => {
      expect(json.foo.bar).to.equal(1)
      cy.exec('git diff --quiet cypress/fixtures/formatted.json')
    })
  });
});
