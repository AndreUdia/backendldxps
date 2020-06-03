const { Model, DataTypes }  = require('sequelize');

class Vendedor extends Model {
    static init(sequelize) {
        super.init({
            cdvend: DataTypes.UUID,
            dsnome: DataTypes.STRING(50),
            cdtab: DataTypes.INTEGER,
            dtnasc: DataTypes.DATEONLY,
        }, { sequelize })
    }
};

module.exports = Vendedor;