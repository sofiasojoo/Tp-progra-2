var express = require('express');
var router = express.Router();
const productos= require("../db/main")
const productController= require("../controllers/productController")

/* GET home page. */
router.get('/', productController.index);

router.get('/product', productController.productos);

router.get('/product/:id', productController.detalle);

router.get('/product/:id/comentarios', productController.comentarios);



module.exports = router;
