const express = require("express");
const router = express.Router();

const musicsController = require("../app/Controller/MusicsController");

router.delete("/:id/trashCan", musicsController.deleteTrashCan);
router.patch("/:id/restore", musicsController.restore);
router.get("/:id/edit", musicsController.edit);
router.post("/store", musicsController.store);
router.get("/create", musicsController.create);
router.delete("/:id", musicsController.delete);
router.put("/:id", musicsController.update);
router.get("/:slug", musicsController.showMusic);

module.exports = router;
