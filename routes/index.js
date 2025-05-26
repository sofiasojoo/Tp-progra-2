var express = require('express');
var router = express.Router();
const productos= require("../db/main")
const indexController= require("../controllers/indexController")

/* GET home page. */




router.get('/', indexController.index);
router.get('/register', indexController.register);
router.get('/login', indexController.login);
router.get("/profile", indexController.profile)











module.exports = router;

