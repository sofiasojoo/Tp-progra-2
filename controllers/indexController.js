const db = require("../database/models")
const productos= db.producto
const indexController={
  index: function(req, res){
    
    db.Producto.findAll({
      include: ["comentarios"] 
    })
      .then(function(productos)  {
        console.log(productos);
        res.render("index", { productosHome: productos });
        
        
      })
      .catch(error => {
        return res.send( error );
      });
    
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