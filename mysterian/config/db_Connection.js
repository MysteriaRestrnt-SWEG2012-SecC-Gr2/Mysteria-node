/* Load mysql module - allow to manipulate the MySQL database */
const mysql = require('mysql');

const { dbAuth } = require('./db_Authentication');

const dbConn = mysql.createConnection(dbAuth);

dbConn.connect(function(err) {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST')
            console.log('DATABASE_CONNECTION_WAS_CLOSED');

        if (err.code === 'ER_CON_COUNT_ERRORS')
            console.log('DATABASE HAS TO MANY CONNECTIONS');

        if (err.code === 'ECONNREFUSED')
            console.log('DATABASE CONNECTION WAS REFUSED');

        throw (err)
    }

    console.log("DB connected successful")
    console.log("DB Host: " + dbAuth.host)
    console.log("Database: " + dbAuth.database)
    console.log("DB User: " + dbAuth.user)
        //console.log ("DB Password: " + dbAuth.password)
});
module.exports = dbConn;