describe("Tasks page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("navigates to /tasks", () => {
    cy.visit("/tasks");
  });

  it('should display "Tasks"', () => {
    cy.visit("/tasks");
    cy.get("[data-test-id=tasks-title]").should("have.text", "Tasks");
  });
});
