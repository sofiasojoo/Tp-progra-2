var express = require('express');
var router = express.Router();
const usersController= require("../controllers/usersController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');


});
router.get('/register', usersController.create);
router.get('/login', usersController.login);
router.post('/newuser/', usersController.create);
router.post('/olduser/', usersController.login);



module.exports = router;
