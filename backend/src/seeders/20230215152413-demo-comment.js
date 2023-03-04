'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Comments', [
      {
        ID_User: 2,
        ID_Post: 1,
        ID_Parent_cmt: null,
        content: "This is cmt 1",
        likes: 100
      },
      {
        ID_User: 2,
        ID_Post: 1,
        ID_Parent_cmt: 1,
        content: "This is cmt 2",
        likes: 100
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
