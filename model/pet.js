const ORM = require("../config/orm.js");

class Pet {

    constructor() {
        this.orm = new ORM();
    }

    addWishList(petId, userId) {
        let table_name = 'wishlist';
        let columns = ['petId', 'userId'];
        let values = [`'${petId}'`, `'${userId}'`];
        return this.orm.create(table_name, columns, values);
    }

    getWishList(userId) {
        let table_name = 'wishlist';
        let columns = ['*'];
        let condition=[`userId='${userId}'`];
        return this.orm.select(table_name, columns,condition);
        
    }
}

module.exports = Pet;