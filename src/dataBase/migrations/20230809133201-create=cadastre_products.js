'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('cadastre_products', { 
      id:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade_product: {
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
      },
    });
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.dropTable('cadastre_products');
    
  }
};
