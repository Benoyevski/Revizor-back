const Diner = require("../models/Diner.model");

module.exports.diner = {
  getDiner: async (req, res) => {
    const data = await Diner.find({});
    res.json(data);
  },
  addDiner: async (req, res) => {
    const data = await Diner.create({
      name: req.body.name,
      type: req.body.type,
      middlePrice: req.body.middlePrice,
      menu: req.body.menu,
      address: req.body.address,
      info: req.body.info,
      image:req.body.image,
      photo:req.body.photo,
      
    });
    res.json(data);
  },
  updateDiner: async (req, res) => {
    const data = await Diner.findByIdAndUpdate(
      req.params.id,
      req.body.category
    );
    res.json(data);
  },
  deleteDiner: async (req, res) => {
    const data = await Diner.findByIdAndDelete(req.params.id);
    res.json(data);
  },
};
