const { Router } = require("express");
const router = Router();
const { diner } = require("../controllers/diner.controller");
const middleware = require("../middleware/auth.middleware");

router.get("/diner", diner.getDiner);
router.post("/diners", diner.addDiner);
// router.patch("/diner/:id", diner.updateDiner);
// router.delete("/diner/:id", diner.deleteDiner);
router.patch("/rating", middleware, diner.rateDiner);
module.exports = router;

