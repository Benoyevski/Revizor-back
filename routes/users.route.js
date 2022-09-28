const { Router } = require("express");
const router = Router();
const { user } = require("../controllers/user.controller");

router.get("/users", user.getUsers);
router.post("/user/login", user.login);
router.post("/user/registr", user.registr);

module.exports = router;
