"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data.json").Category;
    data.forEach((e) => {
      e.createdAt = e.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Categories", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories");
  },
};
