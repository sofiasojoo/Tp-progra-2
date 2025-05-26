const db = require("../database/models")
let productos = db.Producto
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