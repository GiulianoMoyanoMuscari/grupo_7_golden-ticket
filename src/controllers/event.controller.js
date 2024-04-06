const { validationResult } = require("express-validator");
const db = require("../database/models");
const Event = db.Event;

module.exports = {
  create: (req, res) => {
    res.render("events/create");
  },
  list: async (req, res) => {
    const events = await Event.findAll();
    res.json(events);
  },
  processCreate: async (req, res) => {
    try {
      const {
        name,
        description,
        min_age,
        start_date,
        expire_date,
        location,
        price,
        quantity,
        featured,
      } = req.body;

      const { image, banner } = req.files || { image: null, banner: null };

      const event = await Event.create({
        name,
        description,
        min_age,
        start_date,
        expire_date,
        location,
        price,
        quantity,
        image: image ? image[0].filename : "image-placeholder.jpg",
        banner: banner ? banner[0].filename : "banner-placeholder.jpg",
        featured: featured === "on",
      });

      return res.json({ success: true, event });
    } catch (error) {
      return res.json({ success: false, error: error.message });
    }
  },
  processDelete: async (req, res) => {
    const id = req.params.id;
    try {
      const event = await Event.delete(id);
      res.json({ success: true, event });
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  },
};
