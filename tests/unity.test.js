const User= require("../model/user");

test("Can set username via constructor arguments", () => {
    const name = "johnusername1";
    const e = new User(name);
    expect(e.username).toBe(name);
  });
