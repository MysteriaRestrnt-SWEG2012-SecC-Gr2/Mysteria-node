var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/home', function(req, res, next) {
    if (req.session.loggedinUser) {
        session = db.query('select sessionid from registration');

        if (session != "") {

            res.render('home', { username: req.session.username })
        } else {
            res.redirect('/index');
        }
    }
});
module.exports = router;