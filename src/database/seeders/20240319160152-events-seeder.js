"use strict";

const eventsData = require("./events.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const events = eventsData.map((event) => ({
      name: event.event,
      description: event.description,
      start_date: event.date,
      min_age: event.minimumAge,
      image: event.imageHome,
      banner: event.imageFeatured,
      location: event.location,
      created_at: new Date(),
      updated_at: new Date(),
    }));
    await queryInterface.bulkInsert("events", events, {});
    console.log("creando eventos")
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
