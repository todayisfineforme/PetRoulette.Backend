const pets = require('./controllers/pet_controller');

exports.route = (app) => {
    app.post('/pets', pets.create);
    app.get('/pets/:id?', pets.read);
    app.patch('/pets/:id', pets.update);
    app.delete('/pets/:id', pets.delete);

}