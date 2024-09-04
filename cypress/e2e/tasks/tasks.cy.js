describe("Navigating /tasks page", () => {
  it("passes", () => {
    cy.visit("/tasks");
  });

  it('should display "Tasks"', () => {
    cy.get("h1").should("have.text", "Tasks");
  });
});
