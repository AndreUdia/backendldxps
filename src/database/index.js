const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Vendedors = require('../models/Vendedor');

const connection = new Sequelize(dbConfig);

Vendedors.init(connection);

module.exports = connection; // exportar para usar em outros arquivos.