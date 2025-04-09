var express = require('express');
var router = express.Router();

const productController= require("../controllers/productController")

/* GET home page. */

router.get('/', (req, res) => {
    res.render('index'); 
  });


router.get('/id/:id', productController.detalle);
router.get('/product-add', productController.productadd);
router.get('/id/:id/comentarios', productController.comentarios);


module.exports = router;

