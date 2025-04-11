const productos = require("../db/main")
const searchController={
    
    
      search: function(req, res){
        
        res.render('search-results', {searchProducts: productos.productos});
     
      },
      
     
}

module.exports= searchController