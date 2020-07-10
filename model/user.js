const ORM = require("../config/orm.js");

class User {

    constructor() {
        this.orm = new ORM();
    }

    create(username, email, password) {
        let table_name = 'user';
        let columns = ['username', 'email', 'password'];
        let values = [`'${username}'`, `'${email}'`, `'${password}'`];
        return this.orm.create(table_name, columns, values);
    }

   async login(username,password){
       let table_name='user';
       let columns=['username','password'];
       let results = await this.orm.select(table_name, columns, `username='${username}' AND password='${password}'`);
       
       return results.length > 0;
   }
}

module.exports = User;