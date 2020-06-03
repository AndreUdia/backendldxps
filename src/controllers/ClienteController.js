const Cliente = require('../models/Cliente');
const Vendedor = require('../models/Vendedor');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async retornaClientes(req, res) {
        try {
            const clientes = await Cliente.findAll();
            return res.status(200).json(clientes);
        } catch (error) {
            return res.status(400).json("Não foi possível retornar lista de clientes ERRO: " + error);
        }
    },

    async buscaClientesDoVendedor(req, res) {
        try {
            const { cdvend } = req.params;
            const clientes = await Cliente.findAll( {
                where: {
                    cdvend: cdvend
                }
            });

            return res.status(200).json(clientes);

        } catch (error) {
            return res.status(400).json("Não foi possível retornar lista de clientes ERRO: " + error);
        }
    },

    async gravaCliente(req, res) {
        try {
            const { cdvend } = req.params;
            const { dsnome, idtipo, dslim } = req.body;

            const vendedor = await Vendedor.findOne({ where: {cdvend: cdvend }});
            
            if (!vendedor) {
                return res.status(400).json({ error: 'Vendedor não cadastrado'});
            }

            const cdcl = uuidv4();
    
            const cliente = await Cliente.create( { cdcl, dsnome, idtipo, cdvend, dslim });
    
            return res.status(201).json(cliente);

        } catch (error) {
            return res.status(400).json("Não foi possível salvar cliente ERRO: " + error);
        }
    },

    async excluirCliente(req, res) {
        try {
            const { cdcl } = req.params;

            const existe = await Cliente.findOne({ where: { cdcl: cdcl }});

            if(!existe) {
                return res.status(400).json({ msg: "cliente não encontrado para exclusão!"});
            }

            await Cliente.destroy({ where: { cdcl: cdcl}});

            return res.status(200).json({ msg: "excluído com sucesso!"});

        } catch (error) {
            return res.status(400).json("Não foi possível excluir cliente ERRO: " + error);
        }
    },

    async editarCliente(req, res) {
        try {
            const { cdcl } = req.params;
            const { dsnome, idtipo, cdvend, dslim } = req.body;
            
            const cliente = await Cliente.update( { 
                dsnome: dsnome, 
                idtipo: idtipo, 
                dslim: dslim,
                cdvend: cdvend, 
            }, { where: { cdcl: cdcl }});

            return res.status(200).json(cliente);

        } catch (error) {
            return res.status(400).json("Não foi possível alterar vendedor ERRO: " + error);
        }
    }
};

