const productos = require("../db/main")
const productController={
    
    detalle: function(req, res, next) {
        
        res.render('product', {productoDetalle: productos.productos});
      },
    comentarios: function(req, res, next) {
    
        res.render('product', {detalleProductoComentarios: productos.productos[1].comentarios});
      }
      , 
      productadd: function(req, res, next) {
       
          res.render('product-add', {productAdd: productAdd});
          },
          
}

module.exports= productController