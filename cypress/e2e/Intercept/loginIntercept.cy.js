describe("scenario login", () => {
  // TC-001 Login valid
  it("TC-001 Login Dengan Akun Valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionsummary");
    cy.get('button[type="submit"]').click();
    cy.wait("@actionsummary").its("response.statusCode").should("eq", 200);
  });

  //   TC-002 Username tidak valid
  it("TC-002 Login dengan username tidak valid", () => {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts"
    ).as("shortcuts");
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("inisalah");
    cy.get('[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
    // cy.wait("@shortcuts").its("response.statusCode").should("eq", 304);
  });

  //   TC-003 Password tidak valid
  it("TC_003 - Login dengan password tidak valid", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("inisalah");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=7&currentDate=2025-12-09&currentTime=10:10"
    ).as("timeatwork");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
    // cy.wait("@timeatwork").its("response.statusCode").should("eq", 200);
  });

  //   TC-004 username & password kosong
  it("TC_004 - Login dengan field username & password kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc"
    ).as("feedlimit");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").should("contain", "Required");
    //   cy.wait("@feedlimit").its("response.statusCode").should("eq", 200);
  });

  //   TC-005 username kosong
  it("TC_005 - Login dengan field username kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="password"]').type("admin123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-12-09"
    ).as("leavesdate");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").should("contain", "Required");
    //   cy.wait("@leavesdate").its("response.statusCode").should("eq", 200);
  });

  //   TC-006 password kosong
  it("TC_006 - Login dengan field password kosong", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit"
    ).as("subunit");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-input-group__message").should("contain", "Required");
    //   cy.wait("@subunit").its("response.statusCode").should("eq", 200);
  });
  //
  //   TC-007 Case sensitive password
  it("TC_007 - Login dengan password case sensitive", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("ADMIN123");
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations"
    ).as("locations");
    cy.get('button[type="submit"]').click();
    cy.get(".oxd-alert-content-text").should("contain", "Invalid credentials");
    //   cy.wait("@locations").its("response.statusCode").should("eq", 200);
  });
});
