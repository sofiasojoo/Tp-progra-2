const db = require("../database/models")
let productos_add = db.Producto
const productController={
    
    detalle: function(req, res, next) {
       
        
            let idProducto = req.params.id;
          
            db.Producto.findByPk(idProducto, {
              include: [{ association: "comentario" }]
            })
              .then(function(producto){
                res.render('product', { productoDetalle: producto });
              })
              .catch(function(error){
                return res.send(error);
      })
            
          
      }
      , 
      productadd: function (req, res) {
        if (!req.session.usuario) {
          return res.redirect('/login');
         }
        productos_add.create({
         nombreProducto: req.body.nombreProducto,
         descProducto: req.body.descProducto,
         fotoProducto: req.body.fotoProducto,
         idUsuario: req.session.usuario.idUsuario
  })
    .then(function(){
                res.redirect('/login');
      })
    .catch(function(error){
                return res.send(error);
      })
}
          
}

module.exports= productController