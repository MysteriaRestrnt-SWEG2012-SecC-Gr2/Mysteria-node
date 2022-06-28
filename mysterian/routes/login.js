var express = require('express');
const encrypt = require('../lib/hashing');
var router = express.Router();
var db = require('../config/db_Connection');
/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('index');
});
router.post('/login', async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var sql = 'SELECT * FROM registration WHERE username =? AND password =?';
    // const checkPass = await encrypt.matchPassword(body.password, row[0].password);
    // console.log(checkPass);
    db.query(sql, [username, password], function(err, data, fields) {
        if (err) throw err
        if (data.length > 0) {
            if (password == password) {
                req.session.loggedinUser = true;
                req.session.username = username;
                res.redirect('/home');
            }



            /*  req.session.loggedinUser = true;
              req.session.username = username;
              res.redirect('/home');*/
        } else {
            res.render('index', { alertMsg: 'Your username or password is wrong' });
        }
    })
})
module.exports = router;