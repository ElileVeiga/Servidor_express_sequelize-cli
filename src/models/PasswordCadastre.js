const { Model, DataTypes } = require('sequelize');

class PasswordCadastre extends Model {
    static init(sequelize) {
        super.init({
            user: DataTypes.STRING,
            password: DataTypes.STRING,
            ambient: DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = PasswordCadastre;