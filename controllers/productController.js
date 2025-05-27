const db = require("../database/models")
let productos = db.Producto
const productController={
    
    detalle: function(req, res, next) {
       
        
            let idProducto = req.params.id;
          
            db.Producto.findByPk(idProducto, {
              include: [{ association: "comentarios" }]
            })
              .then(function(producto){
                res.render('product', { productoDetalle: producto });
              })
              .catch(error => {
                return res.send(error)
              });
            
          
      }
      , 
      productadd: function(req, res, next) {
       
          res.render('product-add', {profileProductos: productos });
          },
          
}

module.exports= productController