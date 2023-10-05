//conexão com base de dados
const Sequelize = require('sequelize');
const db = require('../config/dataBase');

const User= require('../models/User');
const CasProductController = require('../models/CadastreProcuct');
const PasswordCadastre = require('../models/PasswordCadastre');
const TicketsInsert = require('../models/TicketsInsert');
const StockProducts = require('../models/Stock_Products');

const connection = new Sequelize(db);

User.init(connection);
CasProductController.init(connection);
PasswordCadastre.init(connection);
TicketsInsert.init(connection)
StockProducts.init(connection)


module.exports = connection;