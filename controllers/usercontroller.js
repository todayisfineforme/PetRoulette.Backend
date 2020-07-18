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
        let userName = request.body.userName;
        let password = request.body.password;
        try {
            let user = await this.user.login(userName, password);
            if (user) {
                response.status(200).json({ 
                    success: 'user logged in',
                    userid: user.id});
            }
            else{
                response.status(401).json({ failure: 'could not log in' });
            }
        }
        catch (error) {
            response.status(401).json({ error: 'unable to login user' });
        }
    }

    checkUserAuthentication(request, response, next) {
        if (request.session.userid)
            next();
        else
            response.status(401).json({ error: 'user Unauthorized' });
    }

    createRoutes() {
        this.app.post('/user/signup', (request, response) => this.signupUser(request, response));
        this.app.post('/user/signin', (request, response) => this.loginUser(request, response));
    }
}



module.exports = UserController;