const Msg = require("../models/Msg.model");

module.exports.msgController = {
  getMessages: async (req, res, next) => {
    try {
      const data = await Msg.find({});
      res.json(data);
    } catch (ex) {
      next(ex);
    }
  },
  addMessage: async (req, res, next) => {
    try {
      const data = await Msg.create({
        text: req.body.text,
        author: req.body.author,
      });
      res.json(data);
    } catch (ex) {
      next(ex);
    }
  },
};
