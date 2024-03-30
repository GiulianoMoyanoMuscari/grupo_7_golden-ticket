const { Event } = require("../database/models");
const controller = {
  index: async (req, res) => {
    const events = await Event.findAll();
    res.render("index.ejs", { events });
  },
  showCart: (req, res) => {
    res.render("cart.ejs");
  },
};

module.exports = controller;
