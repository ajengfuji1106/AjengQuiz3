describe("scenario login", () => {
  //login dengan akun valid
  it("TC-001 Login Dengan Akun Valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });
  //login dengan akun tidak valid
  it("TC-002 Login dengan username tidak valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("inisalah");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
  });
  //login dengan password tidak valid
  it("TC_003 - Login dengan password tidak valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("inisalah");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
  });
  //login dengan usn dan password kosong
  it("TC_004 - Login dengan field username & password kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-input-group__message").should("contain", "Required");
  });
  //login dengan usn kosong
  it("TC_005 - Login dengan field username kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-input-group__message").should("contain", "Required");
  });
  //login dengan password kosong
  it("TC_006 - Login dengan field password kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('button[type="submit"]').click();

    cy.get(".oxd-input-group__message").should("contain", "Required");
  });
  //login dengan case sensitive
  it("TC_007 - Login dengan password case sensitive", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("ADMIN123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
  });
});
