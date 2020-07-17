const ORM = require("../config/orm.js");

class Pet {

    constructor() {
        this.orm = new ORM();
    }

    addWishList(petName, note,photoUrl,profileUrl, petId, userId) {
        let table_name = 'wishlist';
        let columns = ['petName', 'note','photoUrl','profileUrl','petId', 'userId'];
        let values = [`'${petName}'`, `'${note}'`,`'${photoUrl}'`,`'${profileUrl}'`,`'${petId}'`, `'${userId}'`];
        return this.orm.create(table_name, columns, values);
    }

    getWishList(userId) {
        let table_name = 'wishlist';
        let columns = ['*'];
        let condition = [`userId='${userId}'`];
        return this.orm.select(table_name, columns, condition);

    }

    async update(id, note) {
        let table_name = 'wishlist';
        let columns = [`note='${note}'`];
        let condition = `id='${id}'`;
        return this.orm.update(table_name, columns, condition);
    }

    deletewishlistItem(id) {
        let table_name = 'wishlist';
        let condition = [`id='${id}'`];
        return this.orm.delete(table_name, condition);

    }
}

module.exports = Pet;