var express = require('express');
var router = express.Router();

const productController= require("../controllers/productController")

/* GET home page. */

router.get('/', (req, res) => {
    res.render('index'); 
  });


router.get('/id/:id', productController.detalle);
router.post('/product-add', productController.productadd);
router.post('/comentarios/:id', productController.comentarios);


module.exports = router;

