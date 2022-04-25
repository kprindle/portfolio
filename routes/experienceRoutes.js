const express = require("express");
const controller = require("../controllers/experienceController");
const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.get("/", controller.index);
router.get("/new", controller.new);
router.post("/new", isLoggedIn, controller.create);
router.get("/:id/edit", isLoggedIn, controller.edit);
router.delete("/:id/delete", isLoggedIn, controller.delete);

module.exports = router;
