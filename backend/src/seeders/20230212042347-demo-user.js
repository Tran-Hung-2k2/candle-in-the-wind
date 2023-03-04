'use strict';
const bcrypt = require('bcrypt');
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
    const salt = await bcrypt.genSalt(10);
    const hashedAdmin = await bcrypt.hash('admin', salt);
    const hashedUser = await bcrypt.hash('tester', salt);

    await queryInterface.bulkInsert('Users', [
      {
        ID_Role: 1,
        fullname: 'admin',
        email: 'admin@gmail.com',
        phone_number: '0123456789',
        address: 'admin',
        password: hashedAdmin
      },
      {
        ID_Role: 2,
        fullname: 'tester',
        email: 'tester@gmail.com',
        phone_number: '0123456789',
        address: 'tester',
        password: hashedUser
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
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
