var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', function(req, res, next) {

  res.render('product', { title: 'Express' });
});

router.get('/product/:id', function(req, res, next) {

  res.render('product', { title: 'Express' });
});

router.get('/product/:id/comentarios', function(req, res, next) {

  res.render('product', { title: 'Express' });
});



module.exports = router;
