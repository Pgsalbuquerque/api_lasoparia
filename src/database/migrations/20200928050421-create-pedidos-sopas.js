'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('pedidos_sopas', {
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
       },
       sopas: {
        type: Sequelize.STRING,
        allowNUll: false,
       },
       value: {
         type: Sequelize.INTEGER,
         allowNUll: false,
       },
       pagamento: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       rua: {
         type: Sequelize.STRING,
         allowNUll: false
       },
       bairro: {
        type: Sequelize.STRING,
        allowNUll: false
      },
       numero: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      referencia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
       }
      });
    
  },

  down: async (queryInterface) => {
    
    return await queryInterface.dropTable('pedidos_sopas');
     
  }
};
