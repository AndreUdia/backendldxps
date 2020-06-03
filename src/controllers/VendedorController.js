const Vendedor = require('../models/Vendedor');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async retornaVendedores(req, res) {
        try {
            const vendedores = await Vendedor.findAll();
            return res.status(200).json(vendedores);
        } catch (error) {
            return res.status(400).json("Não foi possível retornar lista de vendedores ERRO: " + error);
        }
    },
    
    async editarVendedor(req, res) {
        try {
            const { cdvend } = req.params;
            const { dsnome, cdtab, dtnasc } = req.body;
            
            const vendedor = await Vendedor.update( { 
                dsnome: dsnome, 
                cdtab: cdtab, 
                dtnasc: dtnasc 
            }, { where: { cdvend: cdvend }});

            console.log(vendedor);

            return res.status(200).json(vendedor);

        } catch (error) {
            return res.status(400).json("Não foi possível alterar vendedor ERRO: " + error);
        }
    },

    async gravaVendedor(req, res) {
        try {
            const { dsnome, cdtab, dtnasc } = req.body;

            const cdvend = uuidv4();
    
            const vendedor = await Vendedor.create( { cdvend, dsnome, cdtab, dtnasc });
    
            return res.status(201).json(vendedor);

        } catch (error) {
            return res.status(400).json("Não foi possível salvar vendedor ERRO: " + error);
        }
    },

    async excluirVendedor(req, res) {
        try {
            const { cdvend } = req.params;

            const existe = await Vendedor.findOne({ where: { cdvend: cdvend }});

            if(!existe) {
                return res.status(400).json({ msg: "vendedor não encontrado para exclusão!"});
            }

            await Vendedor.destroy({ where: { cdvend: cdvend}});
          
            return res.status(200).json({ msg: "excluído com sucesso!"});

        } catch (error) {
            return res.status(400).json("Não foi possível excluir vendedor ERRO: " + error);
        }
    }
    
};

