const express = require("express");
const controller = require("../controllers/adminController");
const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.get("/", controller.index);
router.post("/login", controller.login);

module.exports = router;
