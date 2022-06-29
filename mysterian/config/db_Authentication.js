const dotenv = require('dotenv').config();

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_DATABASE = process.env.DB_DATABASE


module.exports = {
    dbAuth: {
        host: DB_HOST,
        user: DB_USER,
        database: DB_DATABASE,
    }
};