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
      include: [{association: "productos"}]
    })
          .then(function(usuario) {
              res.render('profile', { usuario });
          })
        .catch(function(error){
          return res.send(error);
      })
  
  
     
      },


  login: function(req, res) {
    if (req.session.user != undefined) {
      return res.redirect (`/profile/${req.session.user.idUsuario}`)
    } else {
        return res.render("login");
    }
      },
  
    register: function(req, res) {
      if (req.session.user != undefined) {
        return res.redirect (`/profile/${req.session.user.idUsuario}`)
      } else {
          return res.render("register");
      }
        },
  logout: function(req, res, next) {
    req.session.destroy();
    res.clearCookie("user");
    res.redirect("/")
    
    },
    productadd: function(req, res) {
      if (req.session.user == undefined) {
        return res.redirect ("/login")
      } else {
      return res.render("product-add");
    }},  
    create: function(req, res){
         if (req.body.email == ""){
          return res.send("completar el email")
         }
         if (req.body.password.length < 3 || req.body.password == ""){
          return res.send("La password es muy corta") 
         }
          User.findOne(
              {where: [{mail: req.body.email}]}
          ).then(function(user){
              if(user != null){
                   res.send("El email ya esta registrado") 
                    
              }
              User.create({
                  nombreUsuario: req.body.usuario,
                  mail: req.body.email,
                  contrasenia: bcrypt.hashSync(req.body.password, 10),
                  fechaNacimiento: req.body.fecha_nacimiento,
                  fotoPerfil: "/images/users/pexels-photo-1222271.jpeg"
              })
              .then(function(User){
                  return res.redirect('/');
              })
              .catch(function (error){
                  res.send(error);
              })
              ;
          }).catch(function(error){
              console.log(error)
          })
         
      },
      
      login2: function(req, res){
          User.findOne(
              {where: [{mail: req.body.email}]}
          )
          .then(function(usuario){            
  
              if (usuario != undefined){
                  
                  const comparacion = bcrypt.compareSync(req.body.password, usuario.contrasenia)
                  
                  if (comparacion == true){             
                      req.session.user = usuario
                         
                  if (req.body.recordarme != undefined){
                      res.cookie('user',usuario,{ maxAge: 1000 * 60 * 5});  
                  }
                  
                      return res.redirect("/")
                  }else {
                      res.send("la password es incorrecta")
                  } 
              }else{
                  res.send("el mail no existe ")
  
              }
              
            ;
      }).catch(function(error){
              return res.send(error);
          })
      },
  
     
}

module.exports= indexController