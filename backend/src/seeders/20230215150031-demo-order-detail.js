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

    await queryInterface.bulkInsert('Order_Details', [
      {
        ID_Order: 1,
        ID_Product: 1,
        quantity : 10
      },
      {
        ID_Order: 1,
        ID_Product: 2,
        quantity : 20
      },
      {
        ID_Order: 2,
        ID_Product: 3,
        quantity : 20
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
    await queryInterface.bulkDelete('Order_Details', null, {});
  }
};
