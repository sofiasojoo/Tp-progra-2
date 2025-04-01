const productos = require("../db/main")
const productController={
    index: h,
    productos: function(req, res, next) {
        let listaProductos=[]
        for(let i=0; i<objetos.producto.length; i++){
          listaProductos.push(objetos.producto[i])
        }
      
        res.render('product', {lista: listaProductos});
      },
    detalle: function(req, res, next) {
        let detalleProducto= []
        detalleProducto.push(objetos.producto[id-1])
      
      
        res.render('product', {detalleProducto: detalleProducto });
      },
    comentarios: function(req, res, next) {
        let detalleProductoComentarios= []
        detalleProducto.push(objetos.producto[id-1].comentarios)
      
      
        res.render('product', { detalleProductoComentarios: detalleProductoComentarios});
      }
      , 
}