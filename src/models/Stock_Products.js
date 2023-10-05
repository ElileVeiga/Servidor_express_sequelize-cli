const { Model, DataTypes } = require('sequelize');

class Stock_Products extends Model {
    static init(sequelize) {
        super.init({
            cod_product: DataTypes.INTEGER,
            name_product: DataTypes.STRING,
            unit_type: DataTypes.STRING,
            grup: DataTypes.STRING,
            product_location: DataTypes.STRING,
            values_product: DataTypes.INTEGER,
            image_product: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Stock_Products;