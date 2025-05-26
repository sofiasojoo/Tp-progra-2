let db = require("../database/models");
let bcrypt = require ('bcryptjs');
const User = db.User

let usersController = {
    create: function(req, res){
       if (req.body.email == ""){
        return res.send("completar el email")
       }
       if (req.body.password.length < 3 || req.body.password == ""){
        return res.send("La password es muy corta o esta vacia") 
       }
        User.findOne(
            {where: [{mail: req.body.email}]}
        ).then(function(user){
            if(user != null){
                return res.send("El email ya esta registrado") 
            }
            User.create({
                nombreUsuario: req.body.usuario,
                mail: req.body.email,
                contrasenia: bcrypt.hashSync(req.body.password, 10),
                fechaNacimiento: req.body.fecha_nacimiento,
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

    
    login: function(req, res){
        if(req.session.usuario != undefined ){
            return res.redirect('/')
        } else {
            return res.render('login');
        }  
    },

    processLogin: function(req,res){
        User.findOne(
            {where: [{email: req.body.email}]}
        )
        .then(function(usuario){
            console.log(usuario);
            if (usuario != undefined) {
                const comparacion = bcrypt.compareSync(req.body.password, usuario.password)
                if (comparacion == true){
                    req.session.usuario = usuario
                       
                if (req.body.recordarme !=undefined){
                    res.cookie('user',usuario,{ maxAge: 1000 * 60 * 5});
                }
                    res.redirect("/")
                }else {
                    res.send("la password es incorrecta")
                } 
            }else {
                res.send("no se encontro ese usuario")
            }
              
        })
        .catch(function(error){
            return res.send(error);
        })      
    },

    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('email');
        res.redirect("/")
    }

  };

  module.exports = usersController;