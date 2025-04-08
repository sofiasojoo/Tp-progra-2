const productos = require("../db/main")
const productController={
    
    productos: function(req, res, next) {
        let listaProductos=[]
        for(let i=0; i<productos.length; i++){
          listaProductos.push(productos[i])
        }
      
        res.render('product', {lista: listaProductos});
      },
    detalle: function(req, res, next) {
        let detalleProducto= []
        detalleProducto.push(productos[id-1])
      
      
        res.render('product', {detalleProducto: detalleProducto });
      },
    comentarios: function(req, res, next) {
        let detalleProductoComentarios= []
        detalleProducto.push(productos[id-1].comentarios)
      
      
        res.render('product', { detalleProductoComentarios: detalleProductoComentarios});
      }
      , 
      profile: function(req, res){
        
     
      }
}

module.exports= productController