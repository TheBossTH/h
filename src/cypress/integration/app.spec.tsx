export {};
it("should work", () => {
  cy.visit("http://localhost:3000");
  cy.get("p").should("have.text", "Hello World");
});
