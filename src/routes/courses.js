const express = require("express");
const router = express.Router();

const coursesController = require("../app/Controller/CoursesController");

router.get("/:id/edit", coursesController.edit);
router.get("/create", coursesController.create);
router.post("/store", coursesController.store);
router.put("/:id", coursesController.update);
router.delete("/:id", coursesController.deleteAndTrash);
router.delete("/:id/delete", coursesController.delete);
router.patch("/:id/restore", coursesController.restore);
router.get("/:slug", coursesController.show);

module.exports = router;
