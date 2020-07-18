const PetController = require('../controllers/petcontroller');

test("Can set app via constructor arguments", () => {
    const app = {};
    const petcontroller = new PetController(app);
    expect(petcontroller.app).toBe(app);
});