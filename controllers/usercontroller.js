const User = require('../model/user');

class UserController {

    constructor(app) {
        this.app = app;
        this.user = new User();
    }

    async signupUser(request, response) {
        let userName = request.body.userName;
        let email = request.body.email;
        let password = request.body.password;
        try {
            await this.user.create(userName, email, password);
            response.status(200).end();
        }
        catch (error) {
            response.status(500).json({error : 'unable to signup user'});
        }
    }

    async loginUser(request, response) {
        let userName = request.body.username;
        let password = request.body.password;
        try {
            let isUserValid = await this.user.login(userName, password);
            if (isUserValid) {

                response.status(200).end();
            }
        }
        catch (error) {
            response.status(500).json({error : 'unable to login user'});
        }
    }

    createRoutes() {

        this.app.post('/user/signup', (request, response) => this.signupUser(request, response));
        this.app.post('/user/signin', (request, response) => this.loginUser(request, response));

    }
}



module.exports = UserController;