module.exports = function(sequelize, dataTypes){
    let alias = "Comentario"
    let cols = {
        idComentario:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        comentario:{
            type: dataTypes.STRING(200),
        },
        idUsuario:{
            type: dataTypes.INTEGER,
        },
        idProducto:{
            type: dataTypes.INTEGER,
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
        tableName : "comentarios",
        timestamps:false, 
    }

    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate= function(models){
        Comentario.belongsTo(models.Producto,{
            as: "productos",
            foreignKey: "idProducto"
        });
        Comentario.belongsTo(models.User,{
            as: "usuarios",
            foreignKey: "idUsuario"
        });
    }

    return Comentario;
}

