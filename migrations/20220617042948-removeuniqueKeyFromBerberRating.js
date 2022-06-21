'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     queryInterface.removeConstraint('BarberRatings',{
        field:"userId",
        unique:false
     }); 

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.addConstraint('BarberRatings',"BarberRatings.userId",{
      unique: true                
    });
  }
};
