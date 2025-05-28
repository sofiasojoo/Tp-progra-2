var express = require('express');
var router = express.Router();
const productos= require("../db/main")
const indexController= require("../controllers/indexController")

/* GET home page. */




router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get("/profile/:id", indexController.profile)
router.get('/logout', indexController.logout);










module.exports = router;

