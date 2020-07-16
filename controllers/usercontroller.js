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
            response.status(200).json({ success: 'signup successful' });;
        }
        catch (error) {
            response.status(500).json({ error: 'unable to signup user' });
        }
    }

    async loginUser(request, response) {
        let userName = request.body.username;
        let password = request.body.password;
        try {
            let user = await this.user.login(userName, password);
            if (user) {
                request.session.userid = user.userid;
                response.status(200).json({ success: 'user logged in' });
            }
        }
        catch (error) {
            response.status(500).json({ error: 'unable to login user' });
        }
    }


    checkUserAuthentication(request, response, next) {
        if (request.session.userid)
            next();
        else
            response.status(401).json({ error: 'user Unauthorized' });
    }

    createRoutes() {
        //will comment it out when an with authentication or it will block the person loging in.
        // this.app.get('*', (request, response, next) => this.checkUserAuthentication(request, response, next));
        this.app.post('/user/signup', (request, response) => this.signupUser(request, response));
        this.app.post('/user/signin', (request, response) => this.loginUser(request, response));
    }
}



module.exports = UserController;