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

router.get('/pages/download', downloadFile);
router.post('/pages/importCSV', importRecord);

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req, res) => {
    res.render('home');
});
router.get('/pages/importCSV', (req, res) => {
    res.render('pages/importCSV');
});



module.exports = router;