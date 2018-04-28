const request = require("supertest");
const app = require("../app.js");

describe("dummy tests", () => {
  it("should always pass", () => {
    expect(true).toEqual(true);
  });

  it("should respond with 404 status", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(404);
  });
});
