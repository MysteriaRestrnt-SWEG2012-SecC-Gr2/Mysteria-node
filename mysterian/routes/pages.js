const express = require("express");

const router = express.Router();
const {
    importRecordPage,
    importRecord,
    downloadFile,
    exportMysql2CSV
} = require("../controllers/recordImportExport");
const {
    AdminPage,
    register,
    registerPage,
    login,
    loginPage,

} = require("../controllers/authController");

const { isLoggedin, isNotLoggedin } = require('../lib/check_authentication');

router.get('/pages/download', isLoggedin, downloadFile);
router.post('/pages/importCSV', isLoggedin, importRecord);

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', isLoggedin, (req, res) => {
    res.render('home');
});
router.get('/pages/importCSV', isLoggedin, (req, res) => {
    res.render('pages/importCSV');
});



module.exports = router;