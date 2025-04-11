const productos = require("../db/main")
const indexController={
  index: function(req, res){
    
    res.render('index', {productosHome: productos.productos});
 
  },
  profile: function(req, res){
        
        res.render('profile', {profileProductos: productos});
     
      },
  register: function(req, res, next) {
       
      let form= "formulario registro"
      res.render('register', {form: form});
      },
  login: function(req, res, next) {
       
        let formLog= "formulario login"
        res.render('login', {formLog: formLog});
        },
   
     
}

module.exports= indexController