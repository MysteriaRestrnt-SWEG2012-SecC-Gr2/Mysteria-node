var express = require('express');
var router = express.Router();

var randtoken = require('rand-token');
const bcrypt = require('bcryptjs');
var db = require('../config/db_Connection');
const sendMail = require('../lib/sendEmail');
// to display registration form 
router.get('/register', function(req, res, next) {
    res.render('index');
});
// to store user input detail on post request
router.post('/register', function(req, res, next) {

    inputData = {

        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2
    };
    // check unique email address
    var sql = 'SELECT * FROM registration WHERE email =?';
    db.query(sql, [inputData.email], async(err, data, fields) => {
        if (err) throw err
        if (data.length > 1) {
            var msg = inputData.email + "email already exist";
        } else if (inputData.password != inputData.password2) {
            var msg = "Password & Confirm Password is not Matched";
        } else {

            // save users data into database



            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(inputData.password, salt);
            console.log(hash);

            const token = randtoken.generate(20);
            const sent = sendMail.sendingMail(inputData.email, token);

            db.query('INSERT INTO registration SET ?', { username: inputData.username, email: inputData.email, password: hash }, (error, results) => {
                if (error) {
                    console.log(error);
                }
                var msg = "You are successfully registered";
            });
            res.render('index', { alertMsg2: msg });
        }

    });

});
module.exports = router;