module.exports = function(sequelize, dataTypes){






    let User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.productos,{
            as: "productos",
            foreignKey: "productos_id"
        });
    }




    return User;
}

