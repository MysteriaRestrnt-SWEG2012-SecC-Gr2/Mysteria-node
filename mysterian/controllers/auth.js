const dbConn = require("../config/db_Connection");
var randtoken = require('rand-token');
const bcrypt = require('bcryptjs');
const { matchedData } = require("express-validator");
exports.index = (req, res) => {
    console.log(req.body);

    const { username, email, password, password2 } = req.body;

    dbConn.query('SELECT  email FROM registration WHERE email= ?', [email], async(error, result) => {
        if (error) {
            console.log(error);
        }
        if (result.length > 0) {
            return res.render('index', {
                message: 'email is already in use'
            })
        } else if (password !== password2) {
            return res.render('index', {
                message: 'password does not match.'

            });
        }

        let hashedpassword = await bcrypt.hash(password, 8);
        console.log(hashedpassword);

        const token = randtoken.generate(20);
        const sent =  sendMail.sendingMail(email, token);

        dbConn.query('INSERT INTO registration SET ?', { username: username, email: email, password: hashedpassword }, (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log(results);
            return res.render('../views/index.ejs', {
                message: "user regestered"
            });

        });
    });
}

exports.login = (req, res, ) => {

    var username = req.body.username;
    var password = req.body.password;

    var sql = 'select * from registration where user_name = ?;';

    dbConn.query(sql, [username], function(err, result, fields) {
        if (err) throw err;

        if (result.length && bcrypt.compareSync(password, result[0].password)) {
            req.username = username;
            res.redirect('/home');
        } else {
            res.redirect('/');
        }

    });
}