const Diner = require("../models/Diner.model");

module.exports.diner = {
  getDiner: async (req, res) => {
    const data = await Diner.find();
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
      image: req.body.image,
      photo: req.body.photo,
    });
    res.json(data);
  },
  updateDiner: async (req, res) => {
    const data = await Diner.findByIdAndUpdate(
      req.params.id,
      photo.req.body.photo
    );
    res.json(data);
  },
  deleteDiner: async (req, res) => {
    const data = await Diner.findByIdAndDelete(req.params.id);
    res.json(data);
  },
  rateDiner: async (req, res) => {
    console.log("test")
    const { dinerId, rating } = req.body;
    const { id } = req.user;
    try {
      const diner = await Diner.findById(dinerId);
      if (!diner.ratedUsers.find((item) => String(item.user) === id)) {
        diner.ratedUsers.push({ user: id, rating });
        await diner.save();
        if (diner.rating !== 0) {
          const sum = diner.ratedUsers.reduce((acc, element) => {
            return acc + Number(element.rating);
          }, 0);
          await diner.updateOne({
            rating: (sum / diner.ratedUsers.length).toFixed(1),
          });
          await diner.save();
        } else {
          await diner.updateOne({
            rating: rating,
          });
        }
      } else {
        diner.ratedUsers = diner.ratedUsers.map((item) => {
          if (String(item.user) === id) {
            item.rating = rating;
          }
          return item;
        });
        await diner.save();
        const sum = diner.ratedUsers.reduce((acc, element) => {
          return acc + Number(element.rating);
        }, 0);
        await diner.updateOne({
          rating: (sum / diner.ratedUsers.length).toFixed(1),
        });
      }
      return res.json(await Diner.findById(dinerId));
    } catch (e) {
      return res.json({ error: `ошибка при попытке оставить оценку: ${e}` });
    }
  },
};
