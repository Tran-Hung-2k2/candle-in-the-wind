'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      ID_Comment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_User: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "ID_User"
        } 
      },
      ID_Post: {
        type: Sequelize.INTEGER,
        references: {
          model: "posts",
          key: "ID_Post"
        } 
      },
      ID_Parent_cmt: {
        type: Sequelize.INTEGER,
        references: {
          model: "comments",
          key: "ID_Comment"
        } 
      },
      content: {
        type: Sequelize.TEXT
      },
      likes: {
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
    await queryInterface.dropTable('Comments');
  }
};