const express = require("express");
const controller = require("../controllers/appsController");
const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.get("/", controller.index);
router.get("/new", controller.new);
router.post("/new", controller.create);

module.exports = router;
