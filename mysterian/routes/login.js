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
    var sql = 'SELECT * FROM registration WHERE username =?';

    // console.log(checkPass);
    db.query(sql, [username], function(err, row, fields) {
        if (err)
            throw err;
        else {
            if (row.length != 1) {
                return res.render('index', {
                    alertMsg: 'Invalid username address or password.'
                });
            }
            console.log("psd chk");
            // const checkPass = await bcrypt.compareSync(body.password, row[0].password);

            const checkPass = encrypt.matchPassword(password, row[0].password);

            if (checkPass) {
                req.session.userID = row[0].user_id;
                req.session.username = row[0].username;
                req.session.email = row[0].email;
                return res.redirect('http://localhost:5500/home');
            } else {
                res.render('index', { alertMsg: 'Your username or password is wrong' });
            }

        }
    })
})
module.exports = router;