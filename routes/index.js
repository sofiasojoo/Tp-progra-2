var express = require('express');
var router = express.Router();
const productos= require("../db/main")
const productController= require("../controllers/productController")

/* GET home page. */


router.get("/search-results", productController.profile)

router.get('/products', productController.productos);

router.get('/products/id/:id', productController.detalle);

router.get('/products/id/:id/comentarios', productController.comentarios);








module.exports = router;

// consultar cuales son las rutas que hay que 
//hacer, no se termina de entender la consigna
