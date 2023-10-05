const express = require('express');

const UserController = require('./src/controllers/UserController');
const CasProductController = require('./src/controllers/CasProductController');
const PasswordCadastreController = require('./src/controllers/PasswordCadastreController');
const TicketInsertController = require('./src/controllers/TicketInsertController');
const StockProductsController = require('./src/controllers/StockProductsController');

const routes = express.Router();

//USERS  UserController
routes.post('/users/login', UserController.index);
routes.post('/users', UserController.store);

//CADASTREPRODUCTS CadastreProducts
routes.get('/cadastreproducts', CasProductController.index);
routes.post('/cadastreproducts', CasProductController.store);
routes.put('/cadastreproducts/:id', CasProductController.update)
routes.delete('/cadastreproducts', CasProductController.delete)

//CADASTRE   PasswordCadastre
routes.get('/passwordcadastres', PasswordCadastreController.index);
routes.post('/passwordcadastres', PasswordCadastreController.store);

//TICKETSINSERT tickets_inserts
routes.get('/ticketInserts', TicketInsertController.index);
routes.get('/ticketInserts/dados/:id', TicketInsertController.indexID);
routes.post('/ticketInserts', TicketInsertController.store);

//ESTOQUE PRODUTOS estoque_de_produtos

routes.get('/stockProducts', StockProductsController.index);
routes.post('/stockProducts', StockProductsController.store);
routes.put('/stockProducts/:id', StockProductsController.update);
routes.delete('/stockProducts/:id', StockProductsController.delete);



module.exports = routes;