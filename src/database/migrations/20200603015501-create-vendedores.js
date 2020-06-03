'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vendedors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      cdvend: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // gerara os IDs automaticamente
        primaryKey: true, 
        allowNull: false,
      },
      dsnome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      cdtab: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dtnasc: {
        type: Sequelize.DATEONLY,
        allowNull: true,
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
    return queryInterface.dropTable('vendedors');
  }
};
