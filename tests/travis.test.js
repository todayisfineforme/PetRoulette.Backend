const User = require("../model/user.js");

describe("travis", () => {
    describe("travis", () => {
        it("should pass travis", () => {
            expect({status: true}).toEqual({status: true});
        });
    });
});

test("Can set username via constructor arguments", () => {
    const name = "johnusername1";
    const e = new User(name);
    expect(e.username).toBe(name);
  });
