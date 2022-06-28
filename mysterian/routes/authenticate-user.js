const router = require("express").Router();
const { body } = require("express-validator");

/* pages route */
const {
    AdminPage,
    register,
    registerPage,
    login,
    loginPage,

} = require("../controllers/authController");


const { isLoggedin, isNotLoggedin } = require('../lib/check_authentication');
const validator = require('../lib/validation_rules');

// router.get('/', isLoggedin, AdminPage);
// router.post('/', isLoggedin, AdminPage);



router.get("/home", isLoggedin, loginPage);
router.get("/pages/importCSV", isLoggedin, loginPage);

router.post("/auth/signup", isNotLoggedin, validator.validationRules[0], login);

router.get("/auth/signup", isNotLoggedin, registerPage);
router.post("/auth/signup", isNotLoggedin, validator.validationRules[1], register);

router.get('/pages/logout',
    (req, res, next) => {
        req.session.destroy(
            (err) => {
                next(err);
            }
        );
        res.redirect('http://localhost:5500');
    }
);
/*
router.get("/auth/passReset_Request", isNotLoggedin, forgotPassword);
router.post("/auth/passReset_Request", isNotLoggedin, sendResetPassLink);

router.get("/reset-password", isNotLoggedin, resetPasswordPage);
router.post("/reset-password", isNotLoggedin, validator.validationRules[3], resetPassword);
*/
module.exports = router;