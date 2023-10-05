module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database:'sequelizedb',
    define: {
        freezeTableName: true,
        timestamps: true,
        underscored: true,
    },
};