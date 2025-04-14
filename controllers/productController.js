const productos = require("../db/main")
const productController={
    
    detalle: function(req, res, next) {
        
        res.render('product', {productoDetalle: productos.productos});
      }
      , 
      productadd: function(req, res, next) {
       
          res.render('product-add', {profileProductos: productos });
          },
          
}

module.exports= productController