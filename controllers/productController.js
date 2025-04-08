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
        let profile= ""
        res.render('profile', {profile: profile});
     
      },
      register: function(req, res, next) {
       
      let form= "formulario registro"
      res.render('register', {form: form});
      },
      login: function(req, res, next) {
       
        let formLog= "formulario login"
        res.render('login', {formLog: formLog});
        },
      productadd: function(req, res, next) {
       
          let productAdd= ""
          res.render('product-add', {productAdd: productAdd});
          },
          
}

module.exports= productController