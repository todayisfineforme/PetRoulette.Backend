const User = require('../model/user');
const { request, response } = require('express');

class UserController {

    constructor(app) {
        this.app = app;
        this.user = new User();
    }

    signupUser(request, response) {
        let userName = request.body.userName;
        let email = request.body.email;
        let password = request.body.password;
        this.user.create(userName, email, password);
    }

    async loginUser(request, response) {
        let userName = request.body.username;
        let password = request.body.password;
        let isUserValid = await this.user.login(userName, password);
        if (isUserValid)
            console.log("Yay! signed in");
        else
            console.log("you are already a user please sign in with you name and password");
    }

    createRoutes() {

        this.app.post('/user/signup', (request, response) => this.signupUser(request, response));
        this.app.post('/user/signin', (request, response) => this.loginUser(request, response));

    }
}


module.exports = UserController;