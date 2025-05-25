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
        User.findAll(
            {where: [{email: req.body.email}]}
        )
        .then(function(usuario){
            if(req.session.email == email ){
                return res.redirect('/')
            } else {
                res.send("El usuario no existe") 
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
        //Procesamos el logout destruyendo la sesión y eliminando la cookie.
    }

  };