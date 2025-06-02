module.exports = function(sequelize, dataTypes){
    let alias = "User"
    let cols = {
        idUsuario:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombreUsuario:{
            type: dataTypes.STRING(30),
        },
        contrasenia:{
            type: dataTypes.STRING(250),
        },
        fechaNacimiento:{
            type: dataTypes.DATE,
        },
        mail:{
            type: dataTypes.STRING(30),
        },
        telefono:{
            type: dataTypes.INTEGER,
        },
        fotoPerfil:{
            type: dataTypes.STRING(100),
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
            as: "productos",
            foreignKey: "idUsuario"
        });

        User.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey: "idComentario"
        });
    }

    return User;
}

