const UserController = require('./controllers/usercontroller');
const path = require('path');


exports.createRoutes = (app) => {
   app.get('/', (request, response) => response.sendFile(path.join(__dirname,'login.html')));
   app.get('/', (request, response) => response.sendFile(path.join(__dirname,'index.html')));
    new UserController(app).createRoutes();
}