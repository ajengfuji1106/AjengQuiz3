describe("Reqres.in API Automation", () => {
  //register berhasil
  it("Register Berhasil", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
    });
  });
  //register gagal
  it("Register Gagal", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
      failOnStatusCode: false,
      body: {
        email: "sydney@fife",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error", "Missing password");
    });
  });

  //list user
  it("List Users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("array");
    });
  });
  //create user
  it("Create User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "Ayiz",
        job: "Project Manager",
      },
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("name");
    });
  });
  //single user
  it("Single User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });
  //single user not found
  it("Single Users Not Found", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/23",
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  //delayed response
  it("Delayed Response", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?delay=3",
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  //update user
  it("Update User", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "Ayiz",
        job: "Senior Project Manager",
      },
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("job");
    });
  });
  //delete user
  it("Delete User", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres_f96a2d1ddaa4435b8d2eef28eb289967",
      },
    }).then((response) => {
      expect(response.status).to.eq(204);
      expect(response.body).to.be.empty;
    });
  });
});
