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
        timestamps:false, //Indica al modelo si debe buscar los campos createdAt y updatedAt en la tabla. Si están en la tabla no es necesario declararlos en la lista de campos.
        // Si en la tabla están con guión bajo hay que usar la propiedad underscore.
        // underscored: false, //Indica al modelo que si loscampos de timestamp en la tabla usan o no guiones bajos en lugar de camelCase.
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