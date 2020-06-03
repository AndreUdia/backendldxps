const express = require('express');
const VendedorController = require('./controllers/VendedorController');

const routes = express.Router();

// crud vendedores
routes.get('/vendedores/todos', VendedorController.retornaVendedores);
routes.post('/vendedores', VendedorController.gravaVendedor);

module.exports = routes;