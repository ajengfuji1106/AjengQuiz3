import loginpom from "../../support/pom/loginpom";
import logindata from "../../fixtures/logindata.json";
describe("scenario login", () => {
  //login dengan akun valid
  it("TC-001 Login Dengan Akun Valid", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.typeUsername(logindata.validUsername);
    loginpom.typePassword(logindata.validPassword);
    loginpom.clickLogin();
  });
  //login dengan akun tidak valid
  it("TC-002 Login dengan username tidak valid", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.typeUsername(logindata.invalidUsername);
    loginpom.typePassword(logindata.invalidPassword);
    loginpom.clickLogin();
    loginpom.ErrorAlert().should("contain", "Invalid credentials");
  });
  //login dengan password tidak valid
  it("TC_003 - Login dengan password tidak valid", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.typeUsername(logindata.validUsername);
    loginpom.typePassword(logindata.invalidPassword);
    loginpom.clickLogin();
    loginpom.ErrorAlert().should("contain", "Invalid credentials");
  });
  //login dengan usn dan password kosong
  it("TC_004 - Login dengan field username & password kosong", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.clearUsername();
    loginpom.clearPassword();
    loginpom.clickLogin();
    loginpom.RequiredError().should("contain", "Required");
  });
  //   //login dengan usn kosong
  it("TC_005 - Login dengan field username kosong", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.clearUsername();
    loginpom.typePassword(logindata.validPassword);
    loginpom.clickLogin();
    loginpom.RequiredError().should("contain", "Required");
  });
  //login dengan password kosong
  it("TC_006 - Login dengan field password kosong", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.typeUsername(logindata.validUsername);
    loginpom.clearPassword();
    loginpom.clickLogin();
    loginpom.RequiredError().should("contain", "Required");
  });
  //login dengan case sensitive
  it("TC_007 - Login dengan password case sensitive", () => {
    loginpom.visit();
    loginpom.waitForLoginForm();
    loginpom.typeUsername(logindata.validUsername);
    loginpom.typePassword(logindata.caseSensitive);
    loginpom.clickLogin();
    loginpom.ErrorAlert().should("contain", "Invalid credentials");
  });
});
