const Vendedor = require('../models/Vendedor');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async retornaVendedores(req, res) {
        const vendedores = await Vendedor.findAll();

        return res.json(vendedores);
    },


    async gravaVendedor(req, res) {
        const { dsnome, cdtab, dtnasc } = req.body;

        const cdvend = uuidv4();

        const vendedor = await Vendedor.create( { cdvend, dsnome, cdtab, dtnasc });

        return res.json(vendedor);
    }
};