const db = require("../database/models")

const User= db.User
let bcrypt = require ('bcryptjs');

const indexController={
 index: function(req, res){
    
    db.Producto.findAll({
      include: [{association: "comentarios"},
            {association: "usuarios"}] 

    })
      .then(function(productos)  {
        res.render("index", { productosHome: productos });
        
        
      }).catch(function(error){
        return res.send(error);
    })
    
  },
 
  profile: function(req, res) {
    User.findByPk(req.params.id, {
      include: ['productos']
    })
          .then(function(usuario) {
              res.render('profile', { usuario });
          })
        .catch(function(error){
          return res.send(error);
      })
  
  
     
      },


  login: function(req, res) {
        return res.render("login");
    },
  
    register: function(req, res) {
      return res.render("register");
  },

 
  logout: function(req, res, next) {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/")
    
    },
   
     
}

module.exports= indexController