const productos = require("../db/main")
const productController={
    
    detalle: function(req, res, next) {
        
        res.render('product', {productoDetalle: productos.productos});
      },
    comentarios: function(req, res, next) {
        let detalleProductoComentarios= []
        detalleProducto.push(productos[id-1].comentarios)
      
      
        res.render('product', { detalleProductoComentarios: detalleProductoComentarios});
      }
      , 
      productadd: function(req, res, next) {
       
          res.render('product-add', {productAdd: productAdd});
          },
          
}

module.exports= productController