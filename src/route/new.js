const express = require("express");
const router = express.Router();

const newsController = require("../app/Controller/NewsController");

router.get("/:slug", newsController.show);

router.get("/", newsController.index);

module.exports = router;
