'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Voucher_Users', {
      ID_VU: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Voucher: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "vouchers",
          key: "ID_Voucher"
        }
      },
      ID_User: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: "users",
          key: "ID_User"
        }
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
    await queryInterface.dropTable('Voucher_Users');
  }
};