/* eslint-disable no-undef */
describe("Test from home page to self assessment", () => {
  it("Goes from home page to summary page / input works", () => {
    cy.visit("http://localhost:3000/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".beginButton").click();
    cy.get("input").clear("J");
    cy.get("input").type("Javascript");
    cy.get("#myRange").should("have.value");
    cy.get("div > button").click();
    cy.get("#myRange").click();
    /* ==== End Cypress Studio ==== */
  });
});
