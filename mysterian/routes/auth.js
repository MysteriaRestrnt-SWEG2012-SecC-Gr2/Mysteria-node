const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.post('/index', authController.index);

router.post('/login', authController.login);
module.exports = router;