const express = require("express");
const router = express.Router();

const meController = require("../app/Controller/MeController");

router.get("/edit", meController.editVideo);

module.exports = router;
