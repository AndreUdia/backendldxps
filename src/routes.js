const express = require('express');
const VendedorController = require('./controllers/VendedorController');
const ClienteController = require('./controllers/ClienteController');

const routes = express.Router();

// crud vendedores
routes.get('/vendedores', VendedorController.retornaVendedores);
routes.post('/vendedores', VendedorController.gravaVendedor);
routes.put('/vendedores/:cdvend', VendedorController.editarVendedor);
routes.delete('/vendedores/:cdvend', VendedorController.excluirVendedor);
routes.get('/vendedores/:cdvend', VendedorController.retornarUmVendedor);

// crud clientes
routes.post('/vendedor/:cdvend/clientes', ClienteController.gravaCliente); // uuid do vendedor informado na rota
routes.get('/vendedor/:cdvend/clientes', ClienteController.buscaClientesDoVendedor); // uuid do vendedor informado na rota
routes.get('/clientes', ClienteController.retornaClientes);
routes.delete('/clientes/:cdcl', ClienteController.excluirCliente);
routes.put('/clientes/:cdcl', ClienteController.editarCliente);

module.exports = routes;