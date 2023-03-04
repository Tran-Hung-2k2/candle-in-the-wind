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
    await queryInterface.bulkInsert('Products', [
      {
        ID_Category: 1,
        title: 'Sản phẩm 1 test',
        price: 20000,
        discount: 1000,
        description: 'Mô tả sản phẩm 1 test',
      },
      {
        ID_Category: 2,
        title: 'Sản phẩm 2 test',
        price: 20000,
        discount: 2000,
        description: 'Mô tả sản phẩm 2 test',
      },
      {
        ID_Category: 3,
        title: 'Sản phẩm 3 test',
        price: 20000,
        discount: 3000,
        description: 'Mô tả sản phẩm 3 test',
      },
      {
        ID_Category: 3,
        title: 'Sản phẩm 4 test',
        price: 20000,
        discount: 4000,
        description: 'Mô tả sản phẩm 4 test',
      },
      {
        ID_Category: 2,
        title: 'Sản phẩm 5 test',
        price: 20000,
        discount: 5000,
        description: 'Mô tả sản phẩm 5 test',
      },
      {
        ID_Category: 1,
        title: 'Sản phẩm 6 test',
        price: 20000,
        discount: 6000,
        description: 'Mô tả sản phẩm 6 test',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
