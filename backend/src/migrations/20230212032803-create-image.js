'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Images', {
      ID_Image: {
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
      content: {
        type: Sequelize.TEXT('medium')
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
    await queryInterface.dropTable('Images');
  }
};