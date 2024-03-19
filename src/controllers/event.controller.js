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
        image,
        banner,
        location,
        price,
        quantity,
        featured,
      } = req.body;

      const event = await Event.create({
        name,
        description,
        min_age,
        start_date,
        expire_date,
        image,
        banner,
        location,
        price,
        quantity,
        featured,
      });

      return res.json({ success: true, event});
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
