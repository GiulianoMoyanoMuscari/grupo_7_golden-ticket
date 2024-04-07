"use strict";

const faker = require("@faker-js/faker").allFakers.es;
const numEvents = 30;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const events = [];
    const now = new Date();
    for (let i = 0; i < numEvents; i++) {
      const event = {
        name: faker.lorem.words({ min: 1, max: 4 }),
        description: faker.lorem.paragraph(),
        start_date: faker.date.soon(),
        expire_date: faker.date.future(),
        image: "image-placeholder.jpg",
        banner: "banner-placeholder.jpg",
        location: faker.location.city_name,
        price: faker.number.int({ min: 1000, max: 20000 }),
        quantity: faker.number.int({ min: 0, max: 1000 }),
        featured: false,
        created_at: now,
        updated_at: now,
      };
      events.push(event);
    }

    await queryInterface.bulkInsert('events', events);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
