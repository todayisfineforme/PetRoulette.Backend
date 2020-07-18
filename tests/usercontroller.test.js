const UserController = require('../controllers/usercontroller');

test("Can set app via constructor arguments", () => {
    const app = {};
    const usercontroller = new UserController(app);
    expect(usercontroller.app).toBe(app);
});