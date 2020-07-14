const UserController = require('./controllers/usercontroller');
const PetController = require('./controllers/petcontroller');
const path = require('path');


exports.createRoutes = (app) => {
   new UserController(app).createRoutes();
   new PetController(app).createRoutes();
}