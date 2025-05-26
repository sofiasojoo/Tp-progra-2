let db = require("../database/models");
let bcrypt = require ('bcryptjs');
const User = db.User

let usersController = {
    create: function(req, res){
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        .then(function(User){
            return res.redirect('/');
        })
        .catch(function (error){
            res.send(error);
        })
        ;
    },

    emailRegister: function(req,res){
        User.findOne(
            {where: [{email: req.body.email}]}
        )
        .then(function(usuario){
            console.log(usuario);

            if (email != undefined) {
                res.send("El email ya esta registrado") 
            } 
            if (email == ""){
                res.send("El campo de email se encuentra vacio") 
            }    
        })
        .catch(function(error){
            return res.send(error);
        })    
    },

    passwordRegister: function(req,res){
        User.findOne(
            {where: [{password: req.body.password}]}
        )
        .then(function(usuario){
            console.log(usuario);

            if (req.body.password.length < 3) {
                req.body.password = bcrypt.hashSync(req.body.password, 10) 
            } 
            else{
                res.send("La password es muy corta") 
            }
            if (req.body.password == ""){
                res.send("El campo de password se encuentra vacio") 
            }    
        })
        .catch(function(error){
            return res.send(error);
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