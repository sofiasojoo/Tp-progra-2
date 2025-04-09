const productos = require("../db/main")
const searchController={
    
    
      search: function(req, res){
        let profile= ""
        res.render('profile', {profile: profile});
     
      },
      
     
}

module.exports= searchController