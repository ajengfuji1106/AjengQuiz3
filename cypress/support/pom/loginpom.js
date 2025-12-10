class loginpom {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  waitForLoginForm() {
    cy.get('input[name="username"]', { timeout: 10000 }).should("be.visible");
  }
  typeUsername(username) {
    cy.get('[name="username"]').type(username);
  }
  typePassword(password) {
    cy.get('[name="password"]').type(password);
  }
  clearUsername() {
    cy.get('input[name="username"]').clear();
  }

  clearPassword() {
    cy.get('input[name="password"]').clear();
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
  ErrorAlert() {
    return cy.get(".oxd-alert-content-text");
  }
  RequiredError() {
    return cy.get(".oxd-input-field-error-message");
  }
}

export default new loginpom();
