const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Vendedores = require('../models/Vendedor');
const Cliente = require('../models/Cliente');

const connection = new Sequelize(dbConfig);

Vendedores.init(connection);
Cliente.init(connection);

Cliente.associar(connection.models);

module.exports = connection; // exportar para usar em outros arquivos.