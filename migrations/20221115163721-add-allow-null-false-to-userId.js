'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('reviews', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('reviews', 'userId', {
      type: Sequelize.INTEGER
    })
  }
}
