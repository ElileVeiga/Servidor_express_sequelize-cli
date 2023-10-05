'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stock_products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      cod_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unit_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      grup: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      values_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image_product: {
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stock_products');

  }
};
