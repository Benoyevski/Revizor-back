const { Router } = require("express");
const router = Router();
const { diner } = require("../controllers/diner.controller");

router.get("/diner", diner.getDiner);
router.post("/diner", diner.addDiner);
router.patch("/diner/:id", diner.updateDiner);
router.delete("/diner/:id", diner.deleteDiner);

module.exports = router;
