module.exports = function(sequelize, dataTypes){





















    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.user,{
        as: "user",
        foreignKey: "user_id"
    });}
    return Producto
}