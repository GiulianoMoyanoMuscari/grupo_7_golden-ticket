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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
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

      await Event.create({
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

      return res.json({ success: "Evento creado con éxito" });
    } catch (error) {
      res.json({
        errors: [{ msg: error.message }],
      });
    }
  },
  processDelete: async (req, res) => {
    const id = req.params.id;
    try {
      await Event.delete(id);
      return res.json({ success: "Evento borrado con éxito" });
    } catch (error) {
      res.json({
        errors: [{ msg: error.message }],
      });
    }
  },
};
