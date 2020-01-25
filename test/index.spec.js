const request = require("supertest");
const app = require("../index.js");

describe("GET /", () => {
  it("should respond with Hello World!", (res) => {
    request(app)
      .get("/")
      .expect("Hello World!", res);
  });
});
