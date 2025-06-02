const db = require("../database/models")
let productos_add = db.Producto
const productController={
    
    detalle: function(req, res, next) {
       
        
            let idProducto = req.params.id;
          
            db.Producto.findByPk(idProducto, {
              include: [
                { association: "comentarios", 
                  include: [{ association: "usuarios" }

                  ] }, 
                ]
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
       
        productos_add.create({
         nombreProducto: req.body.nombreProducto,
         descProducto: req.body.descProducto,
         fotoProducto: req.body.fotoProducto,
         idUsuario: req.session.usuario.idUsuario
  })
    .then(function(){
                res.redirect('/');
      })
    .catch(function(error){
                return res.send(error);
      })
},
comentarios: function (req,res) {
  if (req.session.user == undefined) {
    return res.redirect ("/login")
  } else {
     
  
 
  db.Comentario.create({
  idProducto: req.params.id,
  idUsuario: req.session.user.idUsuario,
  comentario: req.body.comentario,

  })
  .then(function(){
    res.redirect(`/products/id/${req.params.id}`);
})
.catch(function(error){
    return res.send(error);
})
  
}}
          
}

module.exports= productController