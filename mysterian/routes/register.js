var express = require('express');
var router = express.Router();

var randtoken = require('rand-token');
const bcrypt = require('bcryptjs');
var db = require('../config/db_Connection');
// to display registration form 
router.get('/register', function(req, res, next) {
    res.render('index');
});
// to store user input detail on post request
router.post('/register', function(req, res, next) {

    inputData = {

        user_name: req.body.username,
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
            let hashedpassword = await bcrypt.hash(inputData.password, 8);
            console.log(hashedpassword);

            db.query('INSERT INTO registration SET ?', { user_name: inputData.user_name, email: inputData.email, password: inputData.password }, (error, results) => {
                if (error) {
                    console.log(error);
                }
                var msg = "Your are successfully registered";
            });
            res.render('index', { alertMsg: msg });
        }

    });

});
module.exports = router;