'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      cdcl: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // gerara os IDs automaticamente
        primaryKey: true, 
        allowNull: false,
      },
      dsnome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      idtipo: {
        type: Sequelize.CHAR(2),
        allowNull: false,
        defaultValue: 'PF',
      },
      cdvend: { 
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'vendedors', key: 'cdvend'}, // chave estrangeira de vendedor
        onUpdate: 'CASCADE', // alterou muda aqui também 
        onDelete: 'SET NULL',  
      },
      dslim: {
        type: Sequelize.DECIMAL(15, 2),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clientes');
  }
};
