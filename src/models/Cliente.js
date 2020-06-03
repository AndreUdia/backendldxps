const { Model, DataTypes }  = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            cdcl: DataTypes.UUID,
            dsnome: DataTypes.STRING(50),
            idtipo: DataTypes.CHAR(2),
            dslim: DataTypes.DECIMAL(15, 2),
        }, { sequelize })
    }

    static associar(models) {
        this.belongsTo(models.Vendedor, { foreignKey: 'cdvend', as: 'vendedor'}); // fazer relacionamento - depende no index.js
    }
};

module.exports = Cliente;