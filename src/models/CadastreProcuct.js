const { Model, DataTypes } = require('sequelize');

class CadastreProducts extends Model {
    static init(sequelize) {
        super.init({
            name_product: DataTypes.STRING,
            type_product: DataTypes.STRING,
            quantidade_product: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = CadastreProducts;