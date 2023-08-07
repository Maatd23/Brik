"use strict";

/** @type {import('sequelize-cli').Migration} */

const { hashPassword } = require("../helper/hasing");
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data.json").User;
    data.forEach((e) => {
      e.password = hashPassword(e.password);
      e.createdAt = e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};
