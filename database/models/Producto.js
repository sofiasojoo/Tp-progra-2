module.exports = function(sequelize, dataTypes){
    let alias = "Producto"
    let cols = {
        idProducto:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        idUsuario:{
            type: dataTypes.INTEGER,
        },
        nombreProducto:{
            type: dataTypes.STRING(20),
        },
        fotoProducto:{
            type: dataTypes.STRING(100),
        },
        descProducto:{
            type: dataTypes.STRING(500),
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
        tableName : "productos",
        timestamps:false, 
    }

   let Producto = sequelize.define(alias, cols, config);
   Producto.associate= function(models){
       Producto.belongsTo(models.User,{
           as: "usuarios",
           foreignKey: "idUsuario"
       });
       Producto.hasMany(models.Comentario,{
        as: "comentarios",
        foreignKey: "idProducto"
    });
   }

   return Producto;
}