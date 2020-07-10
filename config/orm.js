const connector = require("../config/connection");

class ORM {

    constructor() {

    }

    async initialize() {
        try {

            this.connection = await connector.connect();
        } catch (error) {
            console.error(`Couldn't connect to the database \n ${error}`);
        }
    }

    create(table_name, columns, values) {
        return new Promise(async (resolve, reject) => {

            if (!this.connection)
                await this.initialize();

            let query = `INSERT INTO ${table_name} (${columns}) VALUES (${values})`;

            try {
                await this.connection.query(query);
                resolve();
            } catch (error) {

                reject(error);
            }

        });
    }

    select(table_name, columns, condition) {
        return new Promise(async (resolve, reject) => {

            if (!this.connection)
                await this.initialize();

            let query = `SELECT ${columns} FROM ${table_name}`;

            if (condition)
                query += ` WHERE ${condition}`;

            try {
                let [results] = await this.connection.query(query);

                resolve(results);
            } catch (error) {

                reject(error);
            }

        });
    }
}

module.exports = ORM;