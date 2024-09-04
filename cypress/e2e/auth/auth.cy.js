describe("submit login form and navigating to dashboard page", () => {
  it("passes", () => {
    // const baseUrl = Cypress.env("baseUrl");
    cy.visit("auth/login");

    cy.get("#email").type("admin");

    cy.get("#password").type("admin");

    cy.get("#auth_submit_btn").click();

    cy.url().should("include", "/");
  });
});
