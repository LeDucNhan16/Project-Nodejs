const express = require("express");
const router = express.Router();

const meController = require("../app/Controller/MeController");

router.get("/listMusics", meController.listMusics);
router.get("/trashCanListMusic", meController.trashCanListMusic);

module.exports = router;
