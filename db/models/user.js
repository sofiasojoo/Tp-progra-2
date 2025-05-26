module.exports = function(sequelize, dataTypes){
    let alias = "User"
    let cols = {
        idUsuario:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombreUsuario:{
            type: dataTypes.VARCHAR(30),
        },
        contrasenia:{
            type: dataTypes.VARCHAR(15),
        },
        fechaNacimiento:{
            type: dataTypes.DATE,
        },
        mail:{
            type: dataTypes.VARCHAR(30),
        },
        telefono:{
            type: dataTypes.INTEGER,
        },
        fotoPerfil:{
            type: dataTypes.VARCHAR(100),
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName : "usuarios",
        timestamps:false, 
    }
    let User = sequelize.define(alias, cols, config);
    User.associate= function(models){
        User.hasMany(models.Producto,{
            as: "producto",
            foreignKey: "idProducto"
        });

        User.hasMany(models.Comentario,{
            as: "comentario",
            foreignKey: "idComentario"
        });
    }

    return User;
}

