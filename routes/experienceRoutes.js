const express = require("express");
const controller = require("../controllers/experienceController");
const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.get("/", controller.index);
router.get("/new", controller.new);
router.post("/new", controller.create);
router.get("/:id/edit", controller.edit);
router.put("/:id", controller.update);
router.delete("/:id/delete", controller.delete);

module.exports = router;
