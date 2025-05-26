const productos = require("../db/main")
let db = require("../database/models");
let Search= db.productos
let op = db.Sequelize.Op;
const searchController={
    
    
      search: function(req, res){
        
        Search.findAll({
          where: [{ title: {[op.like]: `%${req.query.search}%`} }], 
          include:[
            {association: "productos"},
            {association: "user"}
        ]
          }
          )
      .then(function(resultados){
       if(resultados.length == 0){
        res.send("No hay resultados para su criterio de búsqueda")
       }else{
        res.render('search-results', {searchProducts: productos.productos});}
      })
      .catch(function(error){
          return res.send(error);
      })
        
     
      },
      
     
}

module.exports= searchController