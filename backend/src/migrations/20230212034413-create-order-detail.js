'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Details', {
      ID_OD: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Product: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "products",
          key: "ID_Product"
        }
      },
      ID_Order: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "orders",
          key: "ID_Order"
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('Now()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('Now()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_Details');
  }
};