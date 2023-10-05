const { Model, DataTypes } = require('sequelize');

class TicketsInsert extends Model {
    static init(sequelize) {
        super.init({
            name_tiket: DataTypes.STRING,
            category: DataTypes.STRING,
            priority: DataTypes.STRING,
            area_tycket: DataTypes.STRING,
            image_tycket: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = TicketsInsert;