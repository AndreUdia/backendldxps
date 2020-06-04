const express = require('express');
const VendedorController = require('./controllers/VendedorController');
const ClienteController = require('./controllers/ClienteController');
const cors = require('cors');

const routes = express.Router();

// crud vendedores
routes.get('/vendedores', cors(), VendedorController.retornaVendedores);
routes.post('/vendedores', cors(), VendedorController.gravaVendedor);
routes.put('/vendedores/:cdvend', cors(), VendedorController.editarVendedor);
routes.delete('/vendedores/:cdvend', VendedorController.excluirVendedor);

// crud clientes
routes.post('/vendedor/:cdvend/clientes',cors(), ClienteController.gravaCliente); // uuid do vendedor informado na rota
routes.get('/vendedor/:cdvend/clientes', cors(), ClienteController.buscaClientesDoVendedor); // uuid do vendedor informado na rota
routes.get('/clientes', cors(), ClienteController.retornaClientes);
routes.delete('/clientes/:cdcl', cors(), ClienteController.excluirCliente);
routes.put('/clientes/:cdcl', cors(), ClienteController.editarCliente);

module.exports = routes;